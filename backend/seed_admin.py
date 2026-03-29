#!/usr/bin/env python3
"""
Seed the first admin user (interactive, no hardcoded values)
Usage: python seed_admin.py
"""

import asyncio
import sys
import getpass
from motor.motor_asyncio import AsyncIOMotorClient
from passlib.context import CryptContext
import os
from dotenv import load_dotenv

load_dotenv()

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

MONGO_URI = os.getenv("MONGO_URI", "mongodb://localhost:27017")
MONGO_DB = os.getenv("MONGO_DB", "restaurant_db")


async def seed():
    print("\n========== Admin Seeder ==========")

    # 🔐 Take secure input
    full_name = input("Enter admin full name  : ").strip()
    email = input("Enter admin email      : ").strip().lower()
    password = getpass.getpass("Enter admin password   : ")
    confirm = getpass.getpass("Confirm admin password : ")

    # ✅ Validation
    if password != confirm:
        print("❌ Passwords do not match. Aborting.")
        sys.exit(1)

    if len(password) < 8:
        print("❌ Password must be at least 8 characters. Aborting.")
        sys.exit(1)

    # 🔗 DB connection
    client = AsyncIOMotorClient(MONGO_URI)
    db = client[MONGO_DB]

    # 🔍 Check existing user
    existing = await db.users.find_one({"email": email})
    if existing:
        print(f"⚠️  User with email '{email}' already exists. Aborting.")
        client.close()
        sys.exit(1)

    # 🔐 Hash password (bcrypt limit safe)
    hashed_password = pwd_context.hash(password[:72])

    # 📦 Create admin
    admin_user = {
        "name": full_name,
        "email": email,
        "hashed_password": hashed_password,
        "role": "admin",
        "restaurant_id": None,
        "is_active": True
    }

    result = await db.users.insert_one(admin_user)

    print(f"\n✅ Admin created successfully")
    print(f"   ID    : {result.inserted_id}")
    print(f"   Name  : {full_name}")
    print(f"   Email : {email}")
    print(f"   Role  : admin")
    print("==================================\n")

    client.close()


if __name__ == "__main__":
    asyncio.run(seed())