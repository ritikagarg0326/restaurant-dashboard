from typing import List, Dict, Optional
import re

MENU_ITEMS = [
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
    {"name": "Veg. Manchurian (Dry/Gravy)", "price": 220},
    {"name": "Spring Rolls", "price": 150},
    {"name": "KFC Spring Roll", "price": 180},
    {"name": "Tandoori Spring Roll", "price": 220},

    {"name": "Dal Makhani", "price": 220},
    {"name": "Dal Tadka", "price": 200},
    {"name": "Tawa Chaap", "price": 220},
    {"name": "Pushpa Chaap", "price": 220},
    {"name": "Chaap Mughlai", "price": 220},
    {"name": "Rara Chaap", "price": 220},
    {"name": "Veg Kukkad Gravy", "price": 220},
    {"name": "Chaap Rogan Josh", "price": 220},
    {"name": "Kadhai Chaap", "price": 220},
    {"name": "Veg Butter Chicken Chaap", "price": 220},
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

    {"name": "Rumali Roti", "price": 15},
    {"name": "Plain Roti", "price": 20},
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
    {"name": "Pepsi Can", "price": 0},
    {"name": "Mineral Water", "price": 0},
    {"name": "Amritsari Thali", "price": 220},
    {"name": "Indian Thali", "price": 280},
    {"name": "SOS Special Thali", "price": 320},
    {"name": "Steam Rice", "price": 120},
    {"name": "Jeera Rice", "price": 120},
    {"name": "Veg Pulao", "price": 180},
    {"name": "Veg Biryani With Gravy", "price": 220},
    {"name": "Veg Biryani With Curd", "price": 220},
    {"name": "Gulab Jamun", "price": 30},
    {"name": "Fruit Cream", "price": 100},
]

RECIPE_MAP = {
    "Malai Chaap": {
        "Soya Chaap": 1,
        "Cream": 0.05,
        "Milk": 0.05,
        "Butter": 0.02,
        "Tomato": 0.1,
        "Onion": 0.1,
        "Ginger Garlic Paste": 0.02,
        "Degi Mirch": 0.01,
        "Kasuri Methi": 0.005,
        "Garam Masala": 0.005,
        "Salt": 0.005,
        "Refined Oil": 0.03,
    },
    "Paneer Butter Masala": {
        "Paneer": 0.18,
        "Tomato": 0.12,
        "Onion": 0.12,
        "Cream": 0.04,
        "Butter": 0.03,
        "Ginger Garlic Paste": 0.02,
        "Garam Masala": 0.005,
        "Degi Mirch": 0.01,
        "Kasuri Methi": 0.005,
        "Salt": 0.005,
        "Refined Oil": 0.03,
    },
    "Shahi Paneer": {
        "Paneer": 0.18,
        "Tomato": 0.1,
        "Onion": 0.1,
        "Cream": 0.05,
        "Milk": 0.05,
        "Butter": 0.025,
        "Ginger Garlic Paste": 0.02,
        "Garam Masala": 0.005,
        "Salt": 0.005,
        "Refined Oil": 0.03,
    },
    "Kadhai Paneer": {
        "Paneer": 0.18,
        "Onion": 0.12,
        "Tomato": 0.1,
        "Green Chilli": 0.02,
        "Ginger Garlic Paste": 0.02,
        "Kasuri Methi": 0.005,
        "Salt": 0.005,
        "Refined Oil": 0.03,
        "Garam Masala": 0.005,
    },
    "Chilly Paneer": {
        "Paneer": 0.18,
        "Onion": 0.1,
        "Tomato": 0.08,
        "Green Chilli": 0.03,
        "Ginger Garlic Paste": 0.02,
        "Salt": 0.005,
        "Refined Oil": 0.03,
        "Garam Masala": 0.005,
    },
    "Veg Chowmein": {
        "Hakka Noodles": 0.2,
        "Onion": 0.08,
        "Tomato": 0.06,
        "Capsicum": 0.05,
        "Ginger Garlic Paste": 0.01,
        "Refined Oil": 0.025,
        "Soy Sauce": 0.01,
        "Salt": 0.005,
    },
}


def normalize_name(name: str) -> str:
    return re.sub(r"[^a-z0-9]", "", name.strip().lower())


def find_menu_item(name: str) -> Optional[Dict[str, object]]:
    key = normalize_name(name)
    if not key:
        return None
    for item in MENU_ITEMS:
        if normalize_name(item["name"]) == key:
            return item
    for item in MENU_ITEMS:
        if normalize_name(item["name"]).startswith(key):
            return item
    for item in MENU_ITEMS:
        if key in normalize_name(item["name"]):
            return item
    return None


def get_menu() -> List[Dict[str, object]]:
    return MENU_ITEMS


def get_recipe(name: str) -> Optional[Dict[str, float]]:
    key = normalize_name(name)
    for title, recipe in RECIPE_MAP.items():
        if normalize_name(title) == key:
            return recipe
    if "chaap" in key:
        return RECIPE_MAP.get("Malai Chaap")
    return None


def get_ingredient_requirements(order_items: List[Dict[str, object]]) -> Dict[str, float]:
    requirements: Dict[str, float] = {}
    for item in order_items:
        name = item.get("name", "")
        qty = float(item.get("quantity", 1))
        recipe = get_recipe(name)
        if not recipe:
            continue
        for ingredient, amount in recipe.items():
            requirements[ingredient] = requirements.get(ingredient, 0.0) + amount * qty
    return requirements
