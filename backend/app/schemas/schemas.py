from pydantic import BaseModel, EmailStr, Field
from typing import Optional, List
from datetime import datetime
from enum import Enum

class Role(str, Enum):
    admin = "admin"
    manager = "manager"

# ── Auth ──────────────────────────────────────────────
class LoginRequest(BaseModel):
    email: EmailStr
    password: str

class TokenResponse(BaseModel):
    access_token: str
    token_type: str = "bearer"
    role: str
    name: str
    restaurant_id: Optional[str] = None

# ── User ──────────────────────────────────────────────
class UserCreate(BaseModel):
    name: str
    email: EmailStr
    password: str
    restaurant_id: Optional[str] = None

class UserOut(BaseModel):
    id: str
    name: str
    email: str
    role: str
    restaurant_id: Optional[str] = None
    is_active: bool

# ── Restaurant ────────────────────────────────────────
class RestaurantCreate(BaseModel):
    name: str
    address: Optional[str] = None
    phone: Optional[str] = None

class RestaurantOut(BaseModel):
    id: str
    name: str
    address: Optional[str] = None
    phone: Optional[str] = None
    manager_id: Optional[str] = None
    manager_name: Optional[str] = None

# ── Order ─────────────────────────────────────────────
class OrderItem(BaseModel):
    name: str
    quantity: int
    price: float

class MenuItem(BaseModel):
    name: str
    price: float

class OrderCreate(BaseModel):
    items: List[OrderItem]
    payment_mode: str  # cash, card, upi, zomato, swiggy
    table_no: Optional[str] = None
    notes: Optional[str] = None

class OrderOut(BaseModel):
    id: str
    restaurant_id: str
    items: List[OrderItem]
    total_amount: float
    payment_mode: str
    table_no: Optional[str] = None
    created_at: datetime

# ── Inventory ─────────────────────────────────────────
class InventoryItem(BaseModel):
    item_name: str
    opening_stock: float
    unit: str
    purchased_qty: float = 0
    closing_stock: float
    cost_per_unit: float = 0
    wastage: float = 0

class InventoryCreate(BaseModel):
    date: str  # YYYY-MM-DD
    items: List[InventoryItem]

class InventoryOut(BaseModel):
    id: str
    restaurant_id: str
    date: str
    items: List[InventoryItem]
    created_at: datetime

# ── Expense ───────────────────────────────────────────
class WastageCreate(BaseModel):
    date: str  # YYYY-MM-DD
    item_name: str
    unit: str
    wastage_qty: float
    cost_per_unit: float
    notes: Optional[str] = None

class ExpenseCreate(BaseModel):
    date: str  # YYYY-MM-DD
    category: str
    amount: float
    notes: Optional[str] = None

class ExpenseOut(BaseModel):
    id: str
    restaurant_id: str
    date: str
    category: str
    amount: float
    notes: Optional[str] = None
    created_at: datetime

# ── Dashboard ─────────────────────────────────────────
class DailySummary(BaseModel):
    date: str
    total_sales: float
    total_orders: int
    cash_sales: float
    upi_sales: float
    online_sales: float  # zomato+swiggy
    total_expenses: float
    net_profit: float

class MonthlySummary(BaseModel):
    month: str
    total_sales: float
    total_expenses: float
    net_profit: float
    profit_pct: float
    daily_breakdown: List[DailySummary]
