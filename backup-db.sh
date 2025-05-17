#!/bin/bash

# This script creates a backup of the database

# Set backup directory
BACKUP_DIR="./backups"

# Create backup directory if it doesn't exist
mkdir -p $BACKUP_DIR

# Set backup filename with current date
BACKUP_FILE="$BACKUP_DIR/cuba_db_backup_$(date +%Y%m%d_%H%M%S).sql"

echo "Creating database backup..."

# Make sure containers are running
if ! docker-compose ps | grep -q cuba-backend; then
  echo "Error: Backend container is not running."
  exit 1
fi

# Copy the database file from the container
docker cp cuba-backend:/app/dev.db $BACKUP_DIR/dev.db.backup

echo "Database backup created at $BACKUP_DIR/dev.db.backup"
echo "Done!"
