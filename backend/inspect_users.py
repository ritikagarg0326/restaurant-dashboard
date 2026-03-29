from pymongo import MongoClient
import json
client = MongoClient('mongodb://localhost:27017')
db = client.restaurant_db
for u in db.users.find():
    print(json.dumps({
        'email': u.get('email'),
        'role': u.get('role'),
        'is_active': u.get('is_active'),
        'restaurant_id': str(u.get('restaurant_id')) if u.get('restaurant_id') else None
    }))
