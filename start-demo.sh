#!/bin/bash

# AWS Bedrock Chatbot - Start Both Backend and Frontend
# This script starts both services and manages them together

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Print colored message
print_message() {
    color=$1
    message=$2
    echo -e "${color}${message}${NC}"
}

# Cleanup function
cleanup() {
    print_message "$YELLOW" "\n🛑 Shutting down services..."
    
    if [ ! -z "$BACKEND_PID" ]; then
        print_message "$YELLOW" "Stopping backend (PID: $BACKEND_PID)..."
        kill $BACKEND_PID 2>/dev/null || true
    fi
    
    if [ ! -z "$FRONTEND_PID" ]; then
        print_message "$YELLOW" "Stopping frontend (PID: $FRONTEND_PID)..."
        kill $FRONTEND_PID 2>/dev/null || true
    fi
    
    print_message "$GREEN" "✅ Services stopped. Goodbye!"
    exit 0
}

# Set trap to cleanup on exit
trap cleanup SIGINT SIGTERM EXIT

print_message "$BLUE" "╔════════════════════════════════════════════════════════════════╗"
print_message "$BLUE" "║         AWS Bedrock Chatbot - Starting Demo                   ║"
print_message "$BLUE" "╚════════════════════════════════════════════════════════════════╝"
echo ""

# Check if we're in the right directory
if [ ! -d "backend" ] || [ ! -d "frontend" ]; then
    print_message "$RED" "❌ Error: Please run this script from the webapp/ directory"
    exit 1
fi

# Check if .env exists in backend
if [ ! -f "backend/.env" ]; then
    print_message "$RED" "❌ Error: backend/.env file not found!"
    print_message "$YELLOW" "Please create it from the template:"
    echo "  cd backend"
    echo "  cp env_template.txt .env"
    echo "  # Then edit .env with your AWS credentials"
    exit 1
fi

# Check if Python dependencies are installed
print_message "$YELLOW" "📦 Checking backend dependencies..."
cd backend
if ! python3 -c "import fastapi" 2>/dev/null; then
    print_message "$YELLOW" "Installing backend dependencies..."
    pip install -r requirements.txt
fi
cd ..

# Check if Node dependencies are installed
print_message "$YELLOW" "📦 Checking frontend dependencies..."
if [ ! -d "frontend/node_modules" ]; then
    print_message "$YELLOW" "Installing frontend dependencies..."
    cd frontend
    npm install
    cd ..
fi

print_message "$GREEN" "✅ All dependencies ready"
echo ""

# Start Backend
print_message "$BLUE" "🚀 Starting FastAPI Backend..."
cd backend
python3 -m uvicorn main:app --reload --host 0.0.0.0 --port 8000 > ../backend.log 2>&1 &
BACKEND_PID=$!
cd ..

print_message "$GREEN" "✅ Backend started (PID: $BACKEND_PID)"
print_message "$GREEN" "   URL: http://localhost:8000"
print_message "$GREEN" "   API Docs: http://localhost:8000/docs"
print_message "$GREEN" "   Logs: webapp/backend.log"
echo ""

# Wait a moment for backend to start
sleep 3

# Start Frontend
print_message "$BLUE" "🚀 Starting Next.js Frontend..."
cd frontend
npm run dev > ../frontend.log 2>&1 &
FRONTEND_PID=$!
cd ..

print_message "$GREEN" "✅ Frontend started (PID: $FRONTEND_PID)"
print_message "$GREEN" "   URL: http://localhost:3000"
print_message "$GREEN" "   Logs: webapp/frontend.log"
echo ""

# Wait for services to be ready
print_message "$YELLOW" "⏳ Waiting for services to be ready..."
sleep 5

# Check if services are running
if ! kill -0 $BACKEND_PID 2>/dev/null; then
    print_message "$RED" "❌ Backend failed to start. Check backend.log for errors."
    exit 1
fi

if ! kill -0 $FRONTEND_PID 2>/dev/null; then
    print_message "$RED" "❌ Frontend failed to start. Check frontend.log for errors."
    exit 1
fi

print_message "$GREEN" "╔════════════════════════════════════════════════════════════════╗"
print_message "$GREEN" "║              🎉 Demo is Ready!                                 ║"
print_message "$GREEN" "╚════════════════════════════════════════════════════════════════╝"
echo ""
print_message "$BLUE" "📍 Access the application:"
echo "   Frontend: http://localhost:3000"
echo "   Backend:  http://localhost:8000"
echo "   API Docs: http://localhost:8000/docs"
echo ""
print_message "$YELLOW" "📋 Logs:"
echo "   Backend:  tail -f webapp/backend.log"
echo "   Frontend: tail -f webapp/frontend.log"
echo ""
print_message "$YELLOW" "💡 Press Ctrl+C to stop both services"
echo ""

# Keep script running and show live logs
print_message "$BLUE" "════════════════ LIVE LOGS ════════════════"
echo ""

# Tail both log files
tail -f backend.log frontend.log &
TAIL_PID=$!

# Wait for user interrupt
wait

