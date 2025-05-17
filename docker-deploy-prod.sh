#!/bin/bash

# This script deploys the CUBA Dashboard to production

# Check if production env file exists
if [ ! -f ".env.production" ]; then
  echo "Error: Production environment file not found."
  echo "Please create .env.production from .env.production.example"
  exit 1
fi

echo "Deploying CUBA Dashboard to production..."

# Create data directory if it doesn't exist
mkdir -p data/db

# Build and start containers in detached mode using production docker-compose
docker-compose -f docker-compose.prod.yml --env-file .env.production up --build -d

# Check if containers are running
echo "Checking container status..."
docker-compose -f docker-compose.prod.yml ps

echo ""
echo "CUBA Dashboard is now running in production mode!"
echo "Frontend is available at: http://localhost"
echo "Backend API is available at: http://localhost/api"
echo ""
echo "To view logs: docker-compose -f docker-compose.prod.yml logs -f"
echo "To stop containers: docker-compose -f docker-compose.prod.yml down"
