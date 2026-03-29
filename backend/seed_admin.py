#!/usr/bin/env python3
"""
Seed the first admin user.
Usage: python seed_admin.py
"""
import asyncio
from motor.motor_asyncio import AsyncIOMotorClient
from passlib.context import CryptContext
import os
from dotenv import load_dotenv

load_dotenv()

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

ADMIN_NAME = os.getenv("ADMIN_NAME", "Super Admin")
ADMIN_EMAIL = os.getenv("ADMIN_EMAIL", "vero@gmail.com")
ADMIN_PASSWORD = os.getenv("ADMIN_PASSWORD", "Veronica123@")
MONGO_URI = os.getenv("MONGO_URI", "mongodb://localhost:27017")
MONGO_DB = os.getenv("MONGO_DB", "restaurant_db")

async def seed():
    client = AsyncIOMotorClient(MONGO_URI)
    db = client[MONGO_DB]
    
    existing = await db.users.find_one({"email": ADMIN_EMAIL.lower()})
    if existing:
        print(f"⚠️  Admin already exists: {ADMIN_EMAIL}")
        client.close()
        return
    
    doc = {
        "name": ADMIN_NAME,
        "email": ADMIN_EMAIL.lower(),
        "hashed_password": pwd_context.hash(ADMIN_PASSWORD),
        "role": "admin",
        "restaurant_id": None,
        "is_active": True
    }
    result = await db.users.insert_one(doc)
    print(f"✅ Admin created!")
    print(f"   ID    : {result.inserted_id}")
    print(f"   Email : {ADMIN_EMAIL}")
    print(f"   Pass  : {ADMIN_PASSWORD}")
    print(f"\n⚠️  Change the password after first login!")
    client.close()

if __name__ == "__main__":
    asyncio.run(seed())
