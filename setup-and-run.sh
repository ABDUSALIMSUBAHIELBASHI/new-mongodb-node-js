#!/bin/bash

# 🚀 Complete Setup and Run Script

echo "=========================================="
echo "  React App with MongoDB Backend Setup"
echo "=========================================="
echo ""

# Check if MongoDB is running
echo "📦 Checking MongoDB..."
if pgrep -x "mongod" > /dev/null; then
    echo "✅ MongoDB is running"
else
    echo "⚠️  MongoDB is not running. Starting..."
    mkdir -p ~/react/backend/data
    mongod --dbpath ~/react/backend/data --logpath ~/react/backend/mongodb.log --fork
    sleep 2
    echo "✅ MongoDB started"
fi

echo ""
echo "=========================================="
echo "  Starting Backend Server"
echo "=========================================="
cd ~/react/backend

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
fi

echo "🚀 Starting backend on port 5001..."
PORT=5001 npm run dev &
BACKEND_PID=$!

sleep 3

echo ""
echo "=========================================="
echo "  Testing Backend"
echo "=========================================="
curl -s http://localhost:5001/api/health | head -1
if [ $? -eq 0 ]; then
    echo "✅ Backend is running and responding"
else
    echo "❌ Backend failed to start"
fi

echo ""
echo "=========================================="
echo "  Starting Frontend Server"
echo "=========================================="
cd ~/react

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo "📦 Installing frontend dependencies..."
    npm install
fi

echo "🚀 Starting React dev server on port 3000..."
npm run dev &
FRONTEND_PID=$!

sleep 5

echo ""
echo "=========================================="
echo "  🎉 Setup Complete!"
echo "=========================================="
echo ""
echo "📱 Frontend: http://localhost:3000"
echo "🔌 Backend:  http://localhost:5001"
echo "📊 Database: mongodb://localhost:27017/react_app"
echo ""
echo "🚀 Quick Links:"
echo "  - Home Page:       http://localhost:3000"
echo "  - Admin Dashboard: http://localhost:3000/admin/dashboard"
echo "  - Login:           http://localhost:3000/login"
echo "  - API Health:      http://localhost:5001/api/health"
echo ""
echo "📝 Test Account:"
echo "  - Email:    test@example.com"
echo "  - Password: test123456"
echo ""
echo "💾 MongoDB Commands:"
echo "  - mongosh                                    # Open MongoDB shell"
echo "  - use react_app                              # Select database"
echo "  - db.users.find().pretty()                   # View all users"
echo "  - db.users.countDocuments()                  # Count users"
echo ""
echo "✋ To stop servers:"
echo "  - Kill backend:  kill $BACKEND_PID"
echo "  - Kill frontend: kill $FRONTEND_PID"
echo ""
echo "=========================================="
echo "  Happy coding! 🎊"
echo "=========================================="
