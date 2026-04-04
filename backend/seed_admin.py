import asyncio
from motor.motor_asyncio import AsyncIOMotorClient
from passlib.context import CryptContext
import os

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

MONGO_URI = os.getenv("MONGO_URI")
MONGO_DB = os.getenv("MONGO_DB", "restaurant_db")

async def seed():
    client = AsyncIOMotorClient(MONGO_URI)
    db = client[MONGO_DB]

    email = os.getenv("ADMIN_EMAIL")
    password = os.getenv("ADMIN_PASSWORD")

    if not email or not password:
        raise ValueError("Missing ADMIN_EMAIL or ADMIN_PASSWORD")

    existing = await db.users.find_one({"email": email})
    if existing:
        print("Admin already exists")
        return

    admin_user = {
        "name": "Admin",
        "email": email,
        "hashed_password": hashed_password,
        "role": "admin",
        "restaurant_id": None,
        "is_active": True
    }

    await db.users.insert_one(admin_user)

    print("✅ Admin created: admin@restaurant.com / Admin@123")

    client.close()

if __name__ == "__main__":
    asyncio.run(seed())
