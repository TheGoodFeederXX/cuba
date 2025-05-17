#!/bin/bash

# This script starts both the backend and frontend servers

# Start the backend server
cd server
source venv/bin/activate
python app.py &
BACKEND_PID=$!

# Wait for backend to start
sleep 2

# Start the frontend server
cd ../client
pnpm dev &
FRONTEND_PID=$!

# Function to handle script termination
cleanup() {
  echo "Shutting down servers..."
  kill $BACKEND_PID
  kill $FRONTEND_PID
  exit 0
}

# Trap SIGINT (Ctrl+C) and call cleanup
trap cleanup SIGINT

# Keep the script running
echo "Both servers are running. Press Ctrl+C to stop."
wait
