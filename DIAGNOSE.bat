@echo off
setlocal enabledelayedexpansion

echo.
echo ==========================================
echo FitPro Gym - Diagnostic Tool
echo ==========================================
echo.

REM Check Node.js
echo [CHECK] Node.js Installation...
node -v >nul 2>&1
if errorlevel 1 (
    echo ❌ Node.js NOT installed. Download from https://nodejs.org
    pause
    exit /b 1
) else (
    for /f "tokens=*" %%i in ('node -v') do echo ✅ Found Node.js: %%i
)

REM Check npm
echo.
echo [CHECK] npm Installation...
npm -v >nul 2>&1
if errorlevel 1 (
    echo ❌ npm NOT installed
    pause
    exit /b 1
) else (
    for /f "tokens=*" %%i in ('npm -v') do echo ✅ Found npm: %%i
)

REM Check Backend dependencies
echo.
echo [CHECK] Backend Dependencies...
if exist "d:\Gym website\backend\node_modules" (
    echo ✅ Backend node_modules found
) else (
    echo ⚠️  Backend node_modules missing. Run: SETUP.bat
)

REM Check Frontend dependencies
echo.
echo [CHECK] Frontend Dependencies...
if exist "d:\Gym website\frontend\node_modules" (
    echo ✅ Frontend node_modules found
) else (
    echo ⚠️  Frontend node_modules missing. Run: SETUP.bat
)

REM Check .env files
echo.
echo [CHECK] Environment Variables...
if exist "d:\Gym website\backend\.env" (
    echo ✅ Backend .env found
) else (
    echo ⚠️  Backend .env missing
)

if exist "d:\Gym website\frontend\.env.local" (
    echo ✅ Frontend .env.local found
) else (
    echo ⚠️  Frontend .env.local missing
)

REM Check port availability
echo.
echo [CHECK] Port Availability...
netstat -ano | findstr :5000 >nul
if errorlevel 1 (
    echo ✅ Port 5000 available (Backend)
) else (
    echo ❌ Port 5000 in use. Run: taskkill /F /IM node.exe
)

netstat -ano | findstr :3000 >nul
if errorlevel 1 (
    echo ✅ Port 3000 available (Frontend)
) else (
    echo ❌ Port 3000 in use. Run: taskkill /F /IM node.exe
)

echo.
echo ==========================================
echo ✅ Diagnostic Complete!
echo ==========================================
echo.
echo Next Steps:
echo 1. Run: SETUP.bat (first time only)
echo 2. Run: START_APP.bat (every time)
echo 3. Open: http://localhost:3000
echo.
pause
