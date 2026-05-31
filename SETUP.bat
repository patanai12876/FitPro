@echo off
echo.
echo ==========================================
echo FitPro Gym - First Time Setup
echo ==========================================
echo.

REM Check if node_modules exist
if not exist "d:\Gym website\node_modules" (
    echo [1/5] Installing root dependencies...
    cd "d:\Gym website"
    call npm install
)

if not exist "d:\Gym website\backend\node_modules" (
    echo [2/5] Installing backend dependencies...
    cd "d:\Gym website\backend"
    call npm install
)

if not exist "d:\Gym website\frontend\node_modules" (
    echo [3/5] Installing frontend dependencies...
    cd "d:\Gym website\frontend"
    call npm install
)

REM Seed the database
echo [4/5] Seeding database with initial data...
cd "d:\Gym website\backend"
call node seed.js
call node add-plans.js
call node add-services.js

echo [5/5] Setup complete!
echo.
echo ==========================================
echo ✅ Setup Completed Successfully!
echo ==========================================
echo.
echo Next time, just run: START_APP.bat
echo.
pause
