from fastapi import APIRouter, Depends, Query, HTTPException
from app.schemas.schemas import InventoryCreate, InventoryOut, WastageCreate
from app.core.database import get_db
from app.api.v1.deps import require_manager, get_current_user
from bson import ObjectId
from typing import List, Optional
from datetime import datetime

router = APIRouter()

def fmt_inv(i) -> InventoryOut:
    return InventoryOut(
        id=str(i["_id"]),
        restaurant_id=str(i["restaurant_id"]),
        date=i["date"],
        items=i["items"],
        created_at=i["created_at"]
    )

@router.post("/", response_model=InventoryOut)
async def submit_inventory(data: InventoryCreate, current=Depends(require_manager)):
    db = get_db()
    rid = current.get("restaurant_id")
    if not rid:
        raise HTTPException(400, "Manager not assigned to restaurant")
    
    # Calculate consumption for each item
    items = []
    for item in data.items:
        consumption = item.opening_stock + item.purchased_qty - item.closing_stock
        items.append({
            **item.dict(),
            "consumption": max(0, consumption),
            "wastage": 0
        })
    
    doc = {
        "restaurant_id": rid,
        "date": data.date,
        "items": items,
        "created_at": datetime.utcnow()
    }
    result = await db.inventory.insert_one(doc)
    doc["_id"] = result.inserted_id
    return fmt_inv(doc)

@router.post("/wastage", response_model=InventoryOut)
async def report_wastage(data: WastageCreate, current=Depends(require_manager)):
    db = get_db()
    rid = current.get("restaurant_id")
    if not rid:
        from fastapi import HTTPException
        raise HTTPException(400, "Manager not assigned to restaurant")

    latest = await db.inventory.find({"restaurant_id": ObjectId(rid)}).sort("date", -1).limit(1).to_list(1)
    if not latest:
        from fastapi import HTTPException
        raise HTTPException(400, "No inventory snapshot found. Submit inventory first.")

    inv = latest[0]
    item_found = False
    for item in inv["items"]:
        if item["item_name"].strip().lower() == data.item_name.strip().lower():
            item["closing_stock"] = max(0, item["closing_stock"] - data.wastage_qty)
            item["consumption"] = max(0, item.get("opening_stock", 0) + item.get("purchased_qty", 0) - item["closing_stock"])
            item["wastage"] = item.get("wastage", 0) + data.wastage_qty
            item_found = True
            break

    if not item_found:
        from fastapi import HTTPException
        raise HTTPException(400, "Selected inventory item not found in latest snapshot")

    await db.inventory.update_one({"_id": inv["_id"]}, {"$set": {"items": inv["items"]}})

    expense_doc = {
        "restaurant_id": ObjectId(rid),
        "date": data.date,
        "category": "Wastage",
        "amount": round(data.wastage_qty * data.cost_per_unit, 2),
        "notes": f"{data.item_name} wastage ({data.wastage_qty} {data.unit})" + (f" - {data.notes}" if data.notes else ""),
        "created_at": datetime.utcnow()
    }
    await db.expenses.insert_one(expense_doc)

    return fmt_inv(inv)

@router.get("/", response_model=List[InventoryOut])
async def list_inventory(
    restaurant_id: Optional[str] = Query(None),
    date: Optional[str] = Query(None),
    current=Depends(get_current_user)
):
    db = get_db()
    query = {}
    if current["role"] == "manager":
        query["restaurant_id"] = current.get("restaurant_id")
    elif restaurant_id:
        query["restaurant_id"] = ObjectId(restaurant_id)
    if date:
        query["date"] = date
    
    inv = await db.inventory.find(query).sort("date", -1).to_list(100)
    return [fmt_inv(i) for i in inv]

@router.get("/low-stock")
async def low_stock_alerts(
    restaurant_id: Optional[str] = Query(None),
    threshold: float = Query(1.0),
    current=Depends(get_current_user)
):
    db = get_db()
    query = {}
    if current["role"] == "manager":
        query["restaurant_id"] = current.get("restaurant_id")
    elif restaurant_id:
        query["restaurant_id"] = ObjectId(restaurant_id)
    
    latest = await db.inventory.find(query).sort("date", -1).limit(1).to_list(1)
    if not latest:
        return []
    
    alerts = []
    for item in latest[0]["items"]:
        if item["closing_stock"] <= threshold:
            alerts.append({"item": item["item_name"], "closing_stock": item["closing_stock"], "unit": item["unit"]})
    return alerts
