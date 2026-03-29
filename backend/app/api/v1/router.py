from fastapi import APIRouter
from app.api.v1.endpoints import auth, users, restaurants, orders, expenses, inventory

api_router = APIRouter()
api_router.include_router(auth.router, prefix="/auth", tags=["auth"])
api_router.include_router(users.router, prefix="/users", tags=["users"])
api_router.include_router(restaurants.router, prefix="/restaurants", tags=["restaurants"])
api_router.include_router(orders.router, prefix="/orders", tags=["orders"])
api_router.include_router(expenses.router, prefix="/expenses", tags=["expenses"])
api_router.include_router(inventory.router, prefix="/inventory", tags=["inventory"])
