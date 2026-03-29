from fastapi import APIRouter, HTTPException, Depends
from app.schemas.schemas import RestaurantCreate, RestaurantOut
from app.core.database import get_db
from app.api.v1.deps import require_admin, get_current_user
from bson import ObjectId
from typing import List
from datetime import datetime

router = APIRouter()

async def fmt_restaurant(db, r) -> RestaurantOut:
    manager_name = None
    if r.get("manager_id"):
        mgr = await db.users.find_one({"_id": r["manager_id"]})
        if mgr:
            manager_name = mgr["name"]
    return RestaurantOut(
        id=str(r["_id"]),
        name=r["name"],
        address=r.get("address"),
        phone=r.get("phone"),
        manager_id=str(r["manager_id"]) if r.get("manager_id") else None,
        manager_name=manager_name
    )

@router.post("/", response_model=RestaurantOut)
async def create_restaurant(data: RestaurantCreate, _=Depends(require_admin)):
    db = get_db()
    doc = {"name": data.name, "address": data.address, "phone": data.phone,
           "manager_id": None, "created_at": datetime.utcnow()}
    result = await db.restaurants.insert_one(doc)
    doc["_id"] = result.inserted_id
    return await fmt_restaurant(db, doc)

@router.get("/", response_model=List[RestaurantOut])
async def list_restaurants(current=Depends(get_current_user)):
    db = get_db()
    if current["role"] == "admin":
        rests = await db.restaurants.find().to_list(100)
    else:
        rid = current.get("restaurant_id")
        if not rid:
            return []
        rests = await db.restaurants.find({"_id": rid}).to_list(1)
    return [await fmt_restaurant(db, r) for r in rests]

@router.patch("/{restaurant_id}/assign/{user_id}")
async def assign_manager(restaurant_id: str, user_id: str, _=Depends(require_admin)):
    db = get_db()
    await db.restaurants.update_one(
        {"_id": ObjectId(restaurant_id)},
        {"$set": {"manager_id": ObjectId(user_id)}}
    )
    await db.users.update_one(
        {"_id": ObjectId(user_id)},
        {"$set": {"restaurant_id": ObjectId(restaurant_id)}}
    )
    return {"message": "Manager assigned"}
