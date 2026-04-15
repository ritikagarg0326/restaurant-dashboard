# 🍽️ RestaurantOS — Multi-Outlet Profit and Loss Management Dashboard

Production-ready restaurant management system with real-time order tracking, inventory, expenses, and P&L analytics.

---
<img src="images/railway-deploy-metric4.png" width="300"/>
<img src="images/railway-deploy-metric1.png" width="300"/>
<img src="images/railway-deploy-metric2.png" width="300"/>
<img src="images/railway-deploy-metric3.png" width="300"/>
<img src="images/grafana.png" width="300"/>
<img src="images/grafana2.png" width="300"/>
<img src="images/grafana3.png" width="300"/>
<img src="images/grafana4.png" width="300"/>
##  Quick Start (Local Dev)

### Prerequisites
- Python 3.10+
- Node.js 18+
- MongoDB running on `localhost:27017`

### Option 1 — One-command setup
```bash
chmod +x start-dev.sh
./start-dev.sh
```

### Option 2 — Docker Compose
```bash
docker-compose up --build
# Then seed admin:
docker exec restaurant_backend python seed_admin.py
```

### Option 3 — Manual
```bash
# Terminal 1: Backend
cd backend
python -m venv venv && source venv/bin/activate
pip install -r requirements.txt
python seed_admin.py
uvicorn app.main:app --reload --port 8000

# Terminal 2: Frontend
cd frontend
npm install
npm start
```

---

## 🔐 Default Credentials Example

| Role    | Email                    | Password     |
|---------|--------------------------|--------------|
| Admin   | admin@restaurant.com     | Admin@12345  |


---

## 🏗️ Architecture

```
restaurant-dashboard/
├── backend/                   # FastAPI + Motor (async MongoDB)
│   ├── app/
│   │   ├── api/v1/
│   │   │   ├── endpoints/     # auth, users, restaurants, orders, expenses, inventory
│   │   │   ├── deps.py        # JWT auth + RBAC guards
│   │   │   └── router.py
│   │   ├── core/
│   │   │   ├── config.py      # Pydantic settings
│   │   │   ├── database.py    # Motor async client
│   │   │   └── security.py    # JWT + bcrypt
│   │   ├── schemas/           # Pydantic request/response models
│   │   └── main.py            # FastAPI app
│   ├── seed_admin.py          # First-run admin seeder
│   └── requirements.txt
│
├── frontend/                  # Angular 17 standalone components
│   └── src/app/
│       ├── admin/             # Admin shell + dashboard + restaurants + users
│       ├── manager/           # Manager shell + dashboard + orders + inventory + expenses
│       └── shared/            # Login, sidebar, guards, services, models
│
└── docker-compose.yml
```

---

## 👥 RBAC — Role-Based Access Control

| Feature               | Admin | Manager |
|-----------------------|:-----:|:-------:|
| View all restaurants  | ✅    | ❌      |
| Create restaurants    | ✅    | ❌      |
| Create manager users  | ✅    | ❌      |
| Disable managers      | ✅    | ❌      |
| Assign managers       | ✅    | ❌      |
| View own restaurant   | ✅    | ✅      |
| Add orders            | ✅    | ✅      |
| Log inventory         | ✅    | ✅      |
| Log expenses          | ✅    | ✅      |
| View analytics        | ✅    | Own only|
| Self-register         | ❌    | ❌      |

**Managers cannot self-register.** Only admin can create manager accounts.

---

## 📡 API Endpoints

### Auth
| Method | Endpoint              | Description           |
|--------|-----------------------|-----------------------|
| POST   | /api/v1/auth/login    | Login → JWT token     |

### Users (Admin only)
| Method | Endpoint                         | Description           |
|--------|----------------------------------|-----------------------|
| GET    | /api/v1/users/                   | List managers         |
| POST   | /api/v1/users/                   | Create manager        |
| PATCH  | /api/v1/users/{id}/toggle        | Enable/disable        |
| GET    | /api/v1/users/me                 | Current user info     |

### Restaurants (Admin only)
| Method | Endpoint                                     | Description       |
|--------|----------------------------------------------|-------------------|
| GET    | /api/v1/restaurants/                         | List restaurants  |
| POST   | /api/v1/restaurants/                         | Create restaurant |
| PATCH  | /api/v1/restaurants/{rid}/assign/{uid}       | Assign manager    |

### Orders
| Method | Endpoint                        | Description                    |
|--------|---------------------------------|--------------------------------|
| POST   | /api/v1/orders/                 | Create order (per order entry) |
| GET    | /api/v1/orders/                 | List orders (with filters)     |
| GET    | /api/v1/orders/summary/daily    | Daily P&L summary              |
| GET    | /api/v1/orders/summary/monthly  | Monthly P&L with chart data    |

### Expenses
| Method | Endpoint           | Description        |
|--------|--------------------|--------------------|
| POST   | /api/v1/expenses/  | Add expense        |
| GET    | /api/v1/expenses/  | List expenses      |

### Inventory
| Method | Endpoint              | Description            |
|--------|-----------------------|------------------------|
| POST   | /api/v1/inventory/    | Submit daily inventory |
| GET    | /api/v1/inventory/    | List submissions       |
| GET    | /api/v1/inventory/low-stock | Low stock alerts  |

Full interactive docs: `http://localhost:8000/docs`

---

## 💾 MongoDB Collections

| Collection    | Purpose                          | Key Indexes                      |
|---------------|----------------------------------|----------------------------------|
| `users`       | Admin + manager accounts         | email (unique)                   |
| `restaurants` | Outlet profiles                  | manager_id                       |
| `orders`      | Every individual order           | restaurant_id + created_at       |
| `expenses`    | Daily expenses                   | restaurant_id + date             |
| `inventory`   | Daily stock submissions          | restaurant_id + date             |

---

## 🔧 Environment Variables

Local development should use a private `backend/.env` file. That file must not be committed to GitHub.

1. Copy the example file:

```bash
cp backend/.env.example backend/.env
```

2. Update `backend/.env` with your local values:

```env
MONGO_URI=mongodb://localhost:27017
MONGO_DB=restaurant_db
SECRET_KEY=your-super-secret-key7y879879s
ALGORITHM=HS256
ACCESS_TOKEN_EXPIRE_MINUTES=480
ALLOWED_ORIGINS=http://localhost:4200
```

3. When deploying from GitHub, do not push `backend/.env`.
   Instead, set these same values as environment variables in your deployment platform or GitHub Secrets.

### GitHub / deployment setup

- In GitHub, go to `Settings > Secrets and variables > Actions`
- Add the following secrets:
  - `MONGO_URI`
  - `MONGO_DB`
  - `SECRET_KEY`
  - `ALGORITHM`
  - `ACCESS_TOKEN_EXPIRE_MINUTES`
  - `ALLOWED_ORIGINS`

Then your deployment workflow can use those secrets without exposing them in source control.

---

## 🌩️ AWS Production Architecture (next phase)

```
Users → CloudFront → S3 (Angular)
                   → ALB → ECS Fargate (FastAPI) → DocumentDB / Atlas
                                                  → Secrets Manager (JWT key, DB creds)
                         → Lambda (scheduled reports, alerts)
                         → SES (email notifications)
```

### Cost estimate for 5 restaurants, 5–10 users:
| Service              | Monthly Cost (INR) |
|----------------------|-------------------|
| ECS Fargate (0.25 vCPU, 512MB) | ~₹200  |
| MongoDB Atlas M0 (free tier)   | ₹0     |
| S3 + CloudFront                | ~₹50   |
| ALB                            | ~₹200  |
| Secrets Manager                | ~₹80   |
| SES (emails)                   | ~₹20   |
| **Total**                      | **~₹550–700/month** |

---

## 📋 Daily Workflow (Manager)

1. Login anytime → `/manager/dashboard`
2. Customer arrives → `/manager/orders` → add order items + payment mode → **Save**
3. Order auto-appears in dashboard and P&L
4. End of day → `/manager/inventory` → fill opening/closing stock
5. Any expense → `/manager/expenses` → log immediately
6. Dashboard auto-calculates profit/loss

---

## 🔒 Security Features

- **JWT Bearer tokens** (HS256, configurable expiry)
- **Bcrypt password hashing** (cost factor 12)
- **Role guards** on all protected routes (frontend + backend)
- **No self-registration** — managers created only by admin
- **CORS** restricted to frontend origin
- **Input validation** via Pydantic v2

---

## 📞 Support

For questions about this codebase, refer to the API docs at `/docs` or contact your developer.
