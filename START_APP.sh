#!/bin/bash

echo ""
echo "=========================================="
echo "FitPro Gym - Application Startup"
echo "=========================================="
echo ""

# Kill any existing Node processes
echo "[1/4] Cleaning up old processes..."
pkill -f "node" 2>/dev/null
sleep 2

# Clear Next.js cache
echo "[2/4] Clearing cache..."
rm -rf "d:/Gym website/frontend/.next" 2>/dev/null

# Start Backend
echo "[3/4] Starting Backend (Port 5000)..."
cd "d:/Gym website/backend" && npm run dev &
BACKEND_PID=$!
sleep 3

# Start Frontend
echo "[4/4] Starting Frontend (Port 3000)..."
cd "d:/Gym website/frontend" && npm run dev &
FRONTEND_PID=$!

echo ""
echo "=========================================="
echo "✅ Application Started!"
echo "=========================================="
echo ""
echo "Frontend: http://localhost:3000"
echo "Backend:  http://localhost:5000"
echo ""
echo "Press Ctrl+C to stop all services"
echo "=========================================="
echo ""

# Wait for both processes
wait
