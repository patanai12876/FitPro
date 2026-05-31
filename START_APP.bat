@echo off
echo.
echo ==========================================
echo FitPro Gym - Application Startup
echo ==========================================
echo.

REM Kill any existing Node processes
echo [1/4] Cleaning up old processes...
taskkill /F /IM node.exe >nul 2>&1
timeout /t 2 >nul

REM Clear Next.js cache
echo [2/4] Clearing cache...
if exist "d:\Gym website\frontend\.next" rmdir /s /q "d:\Gym website\frontend\.next" >nul 2>&1

REM Start Backend
echo [3/4] Starting Backend (Port 5000)...
start "GYM_BACKEND" cmd /k "cd d:\Gym website\backend && npm run dev"
timeout /t 3 >nul

REM Start Frontend
echo [4/4] Starting Frontend (Port 3000)...
start "GYM_FRONTEND" cmd /k "cd d:\Gym website\frontend && npm run dev"

echo.
echo ==========================================
echo ✅ Application Started!
echo ==========================================
echo.
echo Frontend: http://localhost:3000
echo Backend:  http://localhost:5000
echo.
echo Press Ctrl+C in either window to stop
echo ==========================================
echo.
timeout /t 3
