#!/bin/bash

# This script sets up the CUBA dashboard application

echo "Setting up CUBA Dashboard..."

# Create directories if they don't exist
mkdir -p server/prisma

# Set up backend
echo "Setting up backend..."
cd server
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt
echo "Backend setup complete!"

# Set up frontend
echo "Setting up frontend..."
cd ../client
pnpm install
echo "Frontend setup complete!"

echo "Setup complete! You can now run ./start.sh to start the application."
