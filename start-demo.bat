@echo off
REM AWS Bedrock Chatbot - Start Both Backend and Frontend (Windows)

echo ================================================================
echo          AWS Bedrock Chatbot - Starting Demo
echo ================================================================
echo.

REM Check if we're in the right directory
if not exist "backend" (
    echo Error: backend directory not found!
    echo Please run this script from the webapp directory
    pause
    exit /b 1
)

if not exist "frontend" (
    echo Error: frontend directory not found!
    echo Please run this script from the webapp directory
    pause
    exit /b 1
)

REM Check if .env exists
if not exist "backend\.env" (
    echo Error: backend\.env file not found!
    echo Please create it:
    echo   cd backend
    echo   copy env_template.txt .env
    echo   REM Then edit .env with your AWS credentials
    pause
    exit /b 1
)

echo [1/3] Starting FastAPI Backend...
echo.
start "FastAPI Backend" cmd /k "cd backend && uvicorn main:app --reload --port 8000"

echo Backend starting on http://localhost:8000
echo.
timeout /t 5 /nobreak > nul

echo [2/3] Starting Next.js Frontend...
echo.
start "Next.js Frontend" cmd /k "cd frontend && npm run dev"

echo Frontend starting on http://localhost:3000
echo.

echo ================================================================
echo                    Demo is Starting!
echo ================================================================
echo.
echo Frontend: http://localhost:3000
echo Backend:  http://localhost:8000
echo API Docs: http://localhost:8000/docs
echo.
echo Two terminal windows have opened:
echo   - FastAPI Backend
echo   - Next.js Frontend
echo.
echo Close those windows to stop the services.
echo.
pause

