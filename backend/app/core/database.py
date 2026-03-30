from motor.motor_asyncio import AsyncIOMotorClient
from app.core.config import settings

class Database:
    client: AsyncIOMotorClient = None
    db = None

db_instance = Database()

async def connect_db():
    db_instance.client = AsyncIOMotorClient(settings.MONGO_URI)
    db_instance.db = db_instance.client[settings.MONGO_DB]

    # Create indexes
    await db_instance.db.users.create_index("email", unique=True)
    await db_instance.db.restaurants.create_index("manager_id")

    # ✅ Keep only important compound indexes
    await db_instance.db.orders.create_index([("restaurant_id", 1), ("created_at", -1)])
    await db_instance.db.inventory.create_index([("restaurant_id", 1), ("date", -1)])
    await db_instance.db.expenses.create_index([("restaurant_id", 1), ("date", -1)])

    # ❌ Disable these (causing disk issue)
    # await db_instance.db.orders.create_index("created_at")
    # await db_instance.db.expenses.create_index("date")

    print("✅ Connected to MongoDB")

async def close_db():
    if db_instance.client:
        db_instance.client.close()

def get_db():
    return db_instance.db