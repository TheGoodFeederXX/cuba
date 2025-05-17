#!/bin/bash

# This script builds and starts the Docker containers for CUBA Dashboard

ENV_FILE=.env.docker

# Check if we want to use production environment
if [ "$1" = "prod" ]; then
  # Check if production env file exists
  if [ -f ".env.production" ]; then
    ENV_FILE=.env.production
    echo "Using production environment..."
  else
    echo "Warning: Production environment file not found."
    echo "Please create .env.production from .env.production.example"
    echo "Using default docker environment instead."
  fi
fi

echo "Building and starting CUBA Dashboard containers using $ENV_FILE..."

# Build and start containers in detached mode
docker-compose --env-file $ENV_FILE up --build -d

# Check if containers are running
echo "Checking container status..."
docker-compose ps

echo ""
echo "CUBA Dashboard is now running!"
echo "Frontend is available at: http://localhost"
echo "Backend API is available at: http://localhost/api"
echo ""
echo "To view logs: docker-compose logs -f"
echo "To stop containers: docker-compose down"
