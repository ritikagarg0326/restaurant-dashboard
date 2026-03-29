from fastapi import APIRouter, HTTPException, Depends
from app.schemas.schemas import UserCreate, UserOut
from app.core.security import get_password_hash
from app.core.database import get_db
from app.api.v1.deps import require_admin, get_current_user
from bson import ObjectId
from typing import List

router = APIRouter()

def fmt_user(u) -> UserOut:
    return UserOut(
        id=str(u["_id"]),
        name=u["name"],
        email=u["email"],
        role=u["role"],
        restaurant_id=str(u["restaurant_id"]) if u.get("restaurant_id") else None,
        is_active=u.get("is_active", True)
    )

@router.post("/", response_model=UserOut)
async def create_manager(data: UserCreate, _=Depends(require_admin)):
    """Admin creates manager accounts. Managers cannot self-register."""
    db = get_db()
    existing = await db.users.find_one({"email": data.email.lower()})
    if existing:
        raise HTTPException(status_code=400, detail="Email already registered")
    
    doc = {
        "name": data.name,
        "email": data.email.lower(),
        "hashed_password": get_password_hash(data.password),
        "role": "manager",
        "restaurant_id": ObjectId(data.restaurant_id) if data.restaurant_id else None,
        "is_active": True
    }
    result = await db.users.insert_one(doc)
    doc["_id"] = result.inserted_id
    return fmt_user(doc)

@router.get("/", response_model=List[UserOut])
async def list_users(_=Depends(require_admin)):
    db = get_db()
    users = await db.users.find({"role": "manager"}).to_list(100)
    return [fmt_user(u) for u in users]

@router.patch("/{user_id}/toggle")
async def toggle_user(user_id: str, _=Depends(require_admin)):
    db = get_db()
    user = await db.users.find_one({"_id": ObjectId(user_id)})
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    new_status = not user.get("is_active", True)
    await db.users.update_one({"_id": ObjectId(user_id)}, {"$set": {"is_active": new_status}})
    return {"is_active": new_status}

@router.get("/me", response_model=UserOut)
async def me(current=Depends(get_current_user)):
    return fmt_user(current)
