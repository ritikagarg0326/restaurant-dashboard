from fastapi import APIRouter, HTTPException, Depends, Query
from app.schemas.schemas import MenuItem, OrderCreate, OrderOut
from app.core.database import get_db
from app.core.menu import MENU_CATALOG, find_menu_item, apply_order_inventory
from app.api.v1.deps import require_manager, get_current_user
from bson import ObjectId
from typing import List, Optional
from datetime import datetime, date

router = APIRouter()

def fmt_order(o) -> OrderOut:
    return OrderOut(
        id=str(o["_id"]),
        restaurant_id=str(o["restaurant_id"]),
        items=o["items"],
        total_amount=o["total_amount"],
        payment_mode=o["payment_mode"],
        table_no=o.get("table_no"),
        created_at=o["created_at"]
    )

def get_restaurant_id(current):
    if current["role"] == "admin":
        return None  # admin can query any
    return current.get("restaurant_id")

@router.get("/menu", response_model=List[MenuItem])
async def get_menu():
    return MENU_CATALOG

@router.post("/", response_model=OrderOut)
async def create_order(data: OrderCreate, current=Depends(require_manager)):
    db = get_db()
    rid = get_restaurant_id(current)
    if not rid:
        raise HTTPException(status_code=400, detail="Manager must be assigned to a restaurant")

    for item in data.items:
        menu_item = find_menu_item(item.name)
        if menu_item:
            item.price = menu_item["price"]

    total = sum(item.quantity * item.price for item in data.items)
    doc = {
        "restaurant_id": rid,
        "items": [i.dict() for i in data.items],
        "total_amount": total,
        "payment_mode": data.payment_mode,
        "table_no": data.table_no,
        "notes": data.notes,
        "created_at": datetime.utcnow()
    }
    result = await db.orders.insert_one(doc)
    doc["_id"] = result.inserted_id

    await apply_order_inventory(db, rid, data.items)

    return fmt_order(doc)

@router.get("/", response_model=List[OrderOut])
async def list_orders(
    restaurant_id: Optional[str] = Query(None),
    date_str: Optional[str] = Query(None, alias="date"),
    current=Depends(get_current_user)
):
    db = get_db()
    query = {}
    
    if current["role"] == "manager":
        rid = current.get("restaurant_id")
        if not rid:
            return []
        query["restaurant_id"] = rid
    elif restaurant_id:
        query["restaurant_id"] = ObjectId(restaurant_id)
    
    if date_str:
        try:
            d = datetime.strptime(date_str, "%Y-%m-%d")
            next_d = datetime(d.year, d.month, d.day + 1) if d.day < 28 else datetime(d.year, d.month + 1 if d.month < 12 else 1, 1)
            query["created_at"] = {"$gte": d, "$lt": next_d}
        except:
            pass
    
    orders = await db.orders.find(query).sort("created_at", -1).to_list(500)
    return [fmt_order(o) for o in orders]

@router.get("/summary/daily")
async def daily_summary(
    restaurant_id: Optional[str] = Query(None),
    date_str: str = Query(..., alias="date"),
    current=Depends(get_current_user)
):
    db = get_db()
    rid = None
    if current["role"] == "manager":
        rid = current.get("restaurant_id")
    elif restaurant_id:
        rid = ObjectId(restaurant_id)
    
    d = datetime.strptime(date_str, "%Y-%m-%d")
    from calendar import monthrange
    _, last_day = monthrange(d.year, d.month)
    next_day = d.day + 1 if d.day < last_day else 1
    next_month = d.month if d.day < last_day else (d.month % 12 + 1)
    next_year = d.year if next_month > 1 or d.day < last_day else d.year + 1
    end = datetime(next_year, next_month, next_day)

    match = {"created_at": {"$gte": d, "$lt": end}}
    if rid:
        match["restaurant_id"] = rid

    orders_pipeline = [
        {"$match": match},
        {"$group": {
            "_id": "$payment_mode",
            "amount": {"$sum": "$total_amount"},
            "count": {"$sum": 1}
        }}
    ]
    orders_stats = await db.orders.aggregate(orders_pipeline).to_list(length=None)

    breakdown = {item["_id"]: item["amount"] for item in orders_stats}
    total_sales = sum(item["amount"] for item in orders_stats)
    total_orders = sum(item["count"] for item in orders_stats)

    exp_query = {"date": date_str}
    if rid:
        exp_query["restaurant_id"] = rid
    expenses = await db.expenses.find(exp_query).to_list(200)
    total_expenses = sum(e["amount"] for e in expenses)

    return {
        "date": date_str,
        "total_sales": total_sales,
        "total_orders": total_orders,
        "payment_breakdown": breakdown,
        "total_expenses": total_expenses,
        "net_profit": total_sales - total_expenses
    }

@router.get("/summary/monthly")
async def monthly_summary(
    restaurant_id: Optional[str] = Query(None),
    year: int = Query(...),
    month: int = Query(...),
    current=Depends(get_current_user)
):
    db = get_db()
    rid = None
    if current["role"] == "manager":
        rid = current.get("restaurant_id")
    elif restaurant_id:
        rid = ObjectId(restaurant_id)
    
    from calendar import monthrange
    _, last_day = monthrange(year, month)
    start = datetime(year, month, 1)
    end = datetime(year, month, last_day, 23, 59, 59)

    order_match = {"created_at": {"$gte": start, "$lte": end}}
    if rid:
        order_match["restaurant_id"] = rid

    order_pipeline = [
        {"$match": order_match},
        {"$group": {
            "_id": {"$dateToString": {"format": "%Y-%m-%d", "date": "$created_at"}},
            "sales": {"$sum": "$total_amount"},
            "orders": {"$sum": 1}
        }},
        {"$sort": {"_id": 1}}
    ]
    daily_orders = await db.orders.aggregate(order_pipeline).to_list(length=None)

    exp_match = {
        "date": {"$gte": f"{year}-{month:02d}-01", "$lte": f"{year}-{month:02d}-{last_day:02d}"}
    }
    if rid:
        exp_match["restaurant_id"] = rid

    expenses_pipeline = [
        {"$match": exp_match},
        {"$group": {
            "_id": "$category",
            "amount": {"$sum": "$amount"}
        }}
    ]
    expense_breakdown_list = await db.expenses.aggregate(expenses_pipeline).to_list(length=None)
    exp_by_cat = {item["_id"]: item["amount"] for item in expense_breakdown_list}

    daily_exp_pipeline = [
        {"$match": exp_match},
        {"$group": {
            "_id": "$date",
            "amount": {"$sum": "$amount"}
        }}
    ]
    daily_exp_list = await db.expenses.aggregate(daily_exp_pipeline).to_list(length=None)
    daily_exp = {item["_id"]: item["amount"] for item in daily_exp_list}

    total_sales = sum(item["sales"] for item in daily_orders)
    total_orders = sum(item["orders"] for item in daily_orders)
    total_expenses = sum(item["amount"] for item in expense_breakdown_list)
    net_profit = total_sales - total_expenses

    all_days = sorted(set([item["_id"] for item in daily_orders] + list(daily_exp.keys())))
    chart_data = [
        {
            "date": day,
            "sales": next((item["sales"] for item in daily_orders if item["_id"] == day), 0),
            "expenses": daily_exp.get(day, 0),
            "orders": next((item["orders"] for item in daily_orders if item["_id"] == day), 0)
        }
        for day in all_days
    ]

    return {
        "year": year,
        "month": month,
        "total_sales": total_sales,
        "total_orders": total_orders,
        "total_expenses": total_expenses,
        "net_profit": net_profit,
        "profit_pct": round((net_profit / total_sales * 100) if total_sales else 0, 2),
        "chart_data": chart_data,
        "expense_breakdown": exp_by_cat
    }
