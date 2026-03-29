from fastapi import APIRouter, HTTPException, status
from app.schemas.schemas import LoginRequest, TokenResponse
from app.core.security import verify_password, create_access_token
from app.core.database import get_db

router = APIRouter()

@router.post("/login", response_model=TokenResponse)
async def login(data: LoginRequest):
    db = get_db()
    user = await db.users.find_one({"email": data.email.lower()})
    if not user or not verify_password(data.password, user["hashed_password"]):
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Invalid credentials")
    if not user.get("is_active"):
        raise HTTPException(status_code=403, detail="Account disabled")
    
    token = create_access_token({"sub": str(user["_id"]), "role": user["role"]})
    return TokenResponse(
        access_token=token,
        role=user["role"],
        name=user["name"],
        restaurant_id=str(user.get("restaurant_id")) if user.get("restaurant_id") else None
    )
