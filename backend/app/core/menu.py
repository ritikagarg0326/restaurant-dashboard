from typing import List, Optional, Dict
from bson import ObjectId

MENU_CATALOG: List[Dict[str, object]] = [
    {"name": "Plain Salted Fries", "price": 99},
    {"name": "Peri peri Fries", "price": 109},
    {"name": "Cheesy Fries", "price": 129},
    {"name": "Veg Steamed Momos", "price": 90},
    {"name": "Veg Fried Momos", "price": 100},
    {"name": "Veg Kurkure Momos", "price": 150},
    {"name": "Veg Tandoori Momos (Dry)", "price": 160},
    {"name": "Veg Malai Tandoori Momos", "price": 160},
    {"name": "Veg Afgani Tandoori Momos", "price": 160},
    {"name": "Veg Chilli Momos", "price": 180},
    {"name": "Paneer Steamed Momos", "price": 120},
    {"name": "Paneer Fried Momos", "price": 130},
    {"name": "Paneer Kurkure Momos", "price": 160},
    {"name": "Paneer Tandoori Momos (Dry)", "price": 180},
    {"name": "Malai Paneer Tandoori Momos", "price": 180},
    {"name": "Afgani Paneer Tandoori Momos", "price": 180},
    {"name": "Chilli Paneer Momos", "price": 180},
    {"name": "Cheese Burst KFC Momos", "price": 200},
    {"name": "Dragon Momos", "price": 200},
    {"name": "Dal Makhni", "price": 220},
    {"name": "Dal Tadka", "price": 200},
    {"name": "Tawa Chaap", "price": 220},
    {"name": "Pushpa Chaap", "price": 220},
    {"name": "Chaap Mughlai", "price": 220},
    {"name": "Rara Chaap", "price": 220},
    {"name": "Veg Kukkad Gravy", "price": 220},
    {"name": "Chaap Rogan Josh", "price": 220},
    {"name": "Kadhai Chaap", "price": 220},
    {"name": "Veg Butter Chicken Chaap", "price": 220},
    {"name": "Malai Chaap", "price": 240},
    {"name": "Son of Swaad Special Gravy Chaap", "price": 240},
    {"name": "Shahi Paneer", "price": 300},
    {"name": "Paneer Butter Masala", "price": 300},
    {"name": "Kadhai Paneer", "price": 300},
    {"name": "Paneer Tikka Masala", "price": 300},
    {"name": "Paneer Rogan Josh", "price": 300},
    {"name": "Rara Paneer", "price": 300},
    {"name": "Kadhai Mushroom", "price": 300},
    {"name": "Mushroom Tikka Masala", "price": 300},
    {"name": "Malai Kofta", "price": 350},
    {"name": "Mix Veg", "price": 200},
    {"name": "Veg Chowmein", "price": 150},
    {"name": "Chilly Garlic Chowmein", "price": 160},
    {"name": "Singapoori Noodles", "price": 160},
    {"name": "Paneer Noodles", "price": 160},
    {"name": "Hakka Noodles", "price": 160},
    {"name": "Chilly Potato", "price": 160},
    {"name": "Honey Chilly Potato", "price": 160},
    {"name": "Chilly Paneer", "price": 260},
    {"name": "Chilly Mushroom", "price": 260},
    {"name": "Veg Fried Rice", "price": 150},
    {"name": "Paneer Fried Rice", "price": 180},
    {"name": "Schezwan Fried Rice", "price": 160},
    {"name": "Veg Manchurian (Dry/Gravy)", "price": 220},
    {"name": "Spring Rolls", "price": 150},
    {"name": "KFC Spring Roll", "price": 180},
    {"name": "Tandoori Spring Roll", "price": 220},
    {"name": "Rumali Roti", "price": 12},
    {"name": "Plain Roti", "price": 15},
    {"name": "Butter Roti", "price": 20},
    {"name": "Missi Roti", "price": 35},
    {"name": "Plain Naan", "price": 35},
    {"name": "Butter Naan", "price": 45},
    {"name": "Lachcha Parantha", "price": 40},
    {"name": "Green Chilli Parantha", "price": 35},
    {"name": "Red Chilli Parantha", "price": 35},
    {"name": "Aloo Parantha", "price": 60},
    {"name": "Gobi Parantha", "price": 60},
    {"name": "Onion Parantha", "price": 60},
    {"name": "Paneer Parantha", "price": 80},
    {"name": "Cheese Garlic Naan", "price": 80},
    {"name": "Stuff Naan", "price": 60},
    {"name": "Garlic Naan", "price": 60},
    {"name": "Chur Chur Naan", "price": 60},
    {"name": "Vanilla Shake", "price": 180},
    {"name": "Strawberry Shake", "price": 180},
    {"name": "Black Currant Shake", "price": 180},
    {"name": "Kit Kat Shake", "price": 190},
    {"name": "Oreo Shake", "price": 190},
    {"name": "Brownie Shake", "price": 190},
    {"name": "Cold Coffee", "price": 140},
    {"name": "Hot Coffee", "price": 100},
    {"name": "Hot Tea", "price": 60},
    {"name": "Amritsari Thali", "price": 220},
    {"name": "Indian Thali", "price": 280},
    {"name": "SOS Special Thali", "price": 320},
    {"name": "Plain Curd", "price": 90},
    {"name": "Boondi Raita", "price": 120},
    {"name": "Pineapple Raita", "price": 160},
    {"name": "Mixed Raita", "price": 160},
    {"name": "Steam Rice", "price": 120},
    {"name": "Jeera Rice", "price": 120},
    {"name": "Veg Pulao", "price": 150},
    {"name": "Veg Biryani With Gravy", "price": 220},
    {"name": "Veg Biryani With Curd", "price": 220},
    {"name": "Gulab Jamun", "price": 30},
    {"name": "Fruit Cream", "price": 100},
    {"name": "Gulab Jamun (Seasonal)", "price": 120}
]

RECIPE_MAP = {
    "malai chaap": [
        {"item_name": "Paneer", "qty": 0.18, "unit": "kg"},
        {"item_name": "Milk", "qty": 0.15, "unit": "L"},
        {"item_name": "Butter", "qty": 0.03, "unit": "kg"},
        {"item_name": "Garam Masala", "qty": 0.01, "unit": "kg"}
    ],
    "paneer butter masala": [
        {"item_name": "Paneer", "qty": 0.18, "unit": "kg"},
        {"item_name": "Butter", "qty": 0.05, "unit": "kg"},
        {"item_name": "Milk", "qty": 0.12, "unit": "L"},
        {"item_name": "Garam Masala", "qty": 0.01, "unit": "kg"}
    ],
    "shahi paneer": [
        {"item_name": "Paneer", "qty": 0.18, "unit": "kg"},
        {"item_name": "Milk", "qty": 0.12, "unit": "L"},
        {"item_name": "Butter", "qty": 0.04, "unit": "kg"}
    ],
    "kadhai paneer": [
        {"item_name": "Paneer", "qty": 0.18, "unit": "kg"},
        {"item_name": "Butter", "qty": 0.03, "unit": "kg"},
        {"item_name": "Garam Masala", "qty": 0.01, "unit": "kg"}
    ],
    "veg steamed momos": [
        {"item_name": "Maida", "qty": 0.12, "unit": "kg"},
        {"item_name": "Salt", "qty": 0.01, "unit": "kg"}
    ],
    "veg fried momos": [
        {"item_name": "Maida", "qty": 0.12, "unit": "kg"},
        {"item_name": "Refined Oil", "qty": 0.05, "unit": "L"}
    ],
    "plain roti": [
        {"item_name": "Atta", "qty": 0.08, "unit": "kg"}
    ],
    "butter naan": [
        {"item_name": "Maida", "qty": 0.12, "unit": "kg"},
        {"item_name": "Butter", "qty": 0.02, "unit": "kg"}
    ],
    "tawa chaap": [
        {"item_name": "Paneer", "qty": 0.15, "unit": "kg"},
        {"item_name": "Butter", "qty": 0.03, "unit": "kg"}
    ]
}

UNIT_CONVERSION = {
    ("g", "kg"): 0.001,
    ("kg", "g"): 1000,
    ("ml", "L"): 0.001,
    ("L", "ml"): 1000
}


def normalize_unit(value: str) -> str:
    return value.strip().lower()


def convert_quantity(qty: float, from_unit: str, to_unit: str) -> float:
    if from_unit == to_unit:
        return qty
    factor = UNIT_CONVERSION.get((normalize_unit(from_unit), normalize_unit(to_unit)))
    return qty * factor if factor is not None else qty


def find_menu_item(name: str) -> Optional[Dict[str, object]]:
    normalized = name.strip().lower()
    exact = next((item for item in MENU_CATALOG if item["name"].strip().lower() == normalized), None)
    if exact:
        return exact
    return next(
        (item for item in MENU_CATALOG if normalized in item["name"].strip().lower() or item["name"].strip().lower() in normalized),
        None
    )


def get_recipe(name: str) -> List[Dict[str, object]]:
    normalized = name.strip().lower()
    if normalized in RECIPE_MAP:
        return RECIPE_MAP[normalized]

    if "roti" in normalized or "naan" in normalized or "parantha" in normalized:
        return [{"item_name": "Maida", "qty": 0.12, "unit": "kg"}]
    if "shake" in normalized or "coffee" in normalized or "tea" in normalized:
        return [{"item_name": "Milk", "qty": 0.18, "unit": "L"}]
    if "rice" in normalized or "noodles" in normalized or "chowmein" in normalized or "fried" in normalized:
        return [{"item_name": "Refined Oil", "qty": 0.05, "unit": "L"}]
    if "chaap" in normalized or "paneer" in normalized or "malai" in normalized or "momo" in normalized or "roll" in normalized:
        return [
            {"item_name": "Paneer", "qty": 0.15, "unit": "kg"},
            {"item_name": "Butter", "qty": 0.03, "unit": "kg"}
        ]
    return []


async def apply_order_inventory(db, restaurant_id, order_items: List[Dict[str, object]]):
    if isinstance(restaurant_id, str):
        restaurant_id = ObjectId(restaurant_id)
    latest = await db.inventory.find({"restaurant_id": restaurant_id}).sort("date", -1).limit(1).to_list(1)
    if not latest:
        return
    inv = latest[0]
    updated = False
    for ordered_item in order_items:
        recipe = get_recipe(ordered_item["name"]) if isinstance(ordered_item, dict) else get_recipe(ordered_item.name)
        if not recipe:
            continue
        quantity = ordered_item["quantity"] if isinstance(ordered_item, dict) else ordered_item.quantity
        for ingredient in recipe:
            ingredient_name = ingredient["item_name"].strip().lower()
            needed_qty = float(ingredient["qty"]) * float(quantity)
            for inv_item in inv["items"]:
                if inv_item["item_name"].strip().lower() == ingredient_name:
                    inv_unit = normalize_unit(inv_item.get("unit", ""))
                    required_qty = convert_quantity(needed_qty, normalize_unit(ingredient["unit"]), inv_unit)
                    inv_item["closing_stock"] = max(0, inv_item.get("closing_stock", 0) - required_qty)
                    inv_item["consumption"] = max(0, inv_item.get("opening_stock", 0) + inv_item.get("purchased_qty", 0) - inv_item["closing_stock"])
                    updated = True
                    break
    if updated:
        await db.inventory.update_one({"_id": inv["_id"]}, {"$set": {"items": inv["items"]}})
