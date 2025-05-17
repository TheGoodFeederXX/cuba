#!/bin/bash

# This script stops the Docker containers for CUBA Dashboard

echo "Stopping CUBA Dashboard containers..."

docker-compose down

echo "Containers stopped successfully!"
