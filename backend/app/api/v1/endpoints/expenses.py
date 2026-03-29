from fastapi import APIRouter, Depends, Query
from app.schemas.schemas import ExpenseCreate, ExpenseOut
from app.core.database import get_db
from app.api.v1.deps import require_manager, get_current_user
from bson import ObjectId
from typing import List, Optional
from datetime import datetime

router = APIRouter()

def fmt_expense(e) -> ExpenseOut:
    return ExpenseOut(
        id=str(e["_id"]),
        restaurant_id=str(e["restaurant_id"]),
        date=e["date"],
        category=e["category"],
        amount=e["amount"],
        notes=e.get("notes"),
        created_at=e["created_at"]
    )

@router.post("/", response_model=ExpenseOut)
async def create_expense(data: ExpenseCreate, current=Depends(require_manager)):
    db = get_db()
    rid = current.get("restaurant_id")
    if not rid:
        from fastapi import HTTPException
        raise HTTPException(400, "Manager not assigned to restaurant")
    doc = {
        "restaurant_id": rid,
        "date": data.date,
        "category": data.category,
        "amount": data.amount,
        "notes": data.notes,
        "created_at": datetime.utcnow()
    }
    result = await db.expenses.insert_one(doc)
    doc["_id"] = result.inserted_id
    return fmt_expense(doc)

@router.get("/", response_model=List[ExpenseOut])
async def list_expenses(
    restaurant_id: Optional[str] = Query(None),
    date_from: Optional[str] = Query(None),
    date_to: Optional[str] = Query(None),
    current=Depends(get_current_user)
):
    db = get_db()
    query = {}
    if current["role"] == "manager":
        query["restaurant_id"] = current.get("restaurant_id")
    elif restaurant_id:
        query["restaurant_id"] = ObjectId(restaurant_id)
    
    if date_from or date_to:
        query["date"] = {}
        if date_from:
            query["date"]["$gte"] = date_from
        if date_to:
            query["date"]["$lte"] = date_to
    
    expenses = await db.expenses.find(query).sort("date", -1).to_list(500)
    return [fmt_expense(e) for e in expenses]
