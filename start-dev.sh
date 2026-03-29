#!/bin/bash
# ═══════════════════════════════════════════
# RestaurantOS — Local Dev Setup
# ═══════════════════════════════════════════
set -e

echo ""
echo "🍽️  RestaurantOS — Local Dev Setup"
echo "═══════════════════════════════════"

# ── Check prerequisites ──────────────────────────────
command -v python3 >/dev/null 2>&1 || { echo "❌ Python 3 required"; exit 1; }
command -v node    >/dev/null 2>&1 || { echo "❌ Node.js required"; exit 1; }
command -v mongod  >/dev/null 2>&1 || echo "⚠️  mongod not found — make sure MongoDB is running on port 27017"

# ── Backend setup ────────────────────────────────────
echo ""
echo "📦 Setting up Python backend..."
cd backend

if [ ! -d "venv" ]; then
  python3 -m venv venv
  echo "   ✅ Virtual env created"
fi

source venv/bin/activate
pip install -r requirements.txt -q
echo "   ✅ Dependencies installed"

# ── Seed admin ───────────────────────────────────────
echo ""
echo "🔑 Seeding admin user..."
python seed_admin.py

# ── Start backend in background ──────────────────────
echo ""
echo "🚀 Starting FastAPI backend on :8000..."
uvicorn app.main:app --reload --host 0.0.0.0 --port 8000 &
BACKEND_PID=$!
echo "   PID: $BACKEND_PID"

cd ..

# ── Frontend setup ───────────────────────────────────
echo ""
echo "📦 Setting up Angular frontend..."
cd frontend

if [ ! -d "node_modules" ]; then
  npm install
  echo "   ✅ Node modules installed"
fi

echo ""
echo "🚀 Starting Angular dev server on :4200..."
npm start &
FRONTEND_PID=$!

cd ..

echo ""
echo "═══════════════════════════════════════════"
echo "✅ RestaurantOS is running!"
echo ""
echo "   Frontend : http://localhost:4200"
echo "   Backend  : http://localhost:8000"
echo "   API Docs : http://localhost:8000/docs"
echo ""
echo "   Admin login:"
echo "   Email    : admin@restaurant.com"
echo "   Password : Admin@12345"
echo ""
echo "   Press Ctrl+C to stop all services"
echo "═══════════════════════════════════════════"

trap "kill $BACKEND_PID $FRONTEND_PID 2>/dev/null; echo 'Stopped.'" EXIT
wait
