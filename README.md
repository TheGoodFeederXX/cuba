# CUBA Dashboard Application

A modern dashboard application with user authentication, user dashboard, and admin functionality.

## Tech Stack

### Frontend
- Vite
- React
- TypeScript
- Wouter (for routing)
- TailwindCSS (for styling)
- Axios (for API calls)

### Backend
- Flask API
- SQLite database
- JWT authentication
- Prisma (for database operations)

## Features

- User authentication (login, register)
- User dashboard with analytics and activity tracking
- Admin dashboard for user management
- Secure API with JWT authentication
- Role-based access control

## Getting Started

### Prerequisites
- Node.js
- pnpm
- Python 3.x
- pip

### Installation and Setup

1. Clone this repository
2. Set up the backend:
   ```
   cd server
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   pip install -r requirements.txt
   ```

3. Set up the frontend:
   ```
   cd client
   pnpm install
   ```

### Running the Application

#### Option 1: Local Development

1. Start the backend:
   ```
   cd server
   source venv/bin/activate
   python app.py
   ```

2. Start the frontend:
   ```
   cd client
   pnpm dev
   ```

#### Option 2: Using Docker

1. Build and run containers:
   ```
   ./docker-start.sh
   ```

2. Stop containers:
   ```
   ./docker-stop.sh
   ```

3. View container logs:
   ```
   docker-compose logs -f
   ```

### Docker Deployment Options

#### Development Environment
```
./docker-start.sh
```

#### Production Environment
1. Create a production environment file:
   ```
   cp .env.production.example .env.production
   # Edit .env.production with secure values
   ```

2. Deploy using production configuration:
   ```
   ./docker-deploy-prod.sh
   ```

3. Open your browser and navigate to `http://localhost`

## Default Admin Account

- Email: admin@example.com
- Password: admin123

## License

This project is licensed under the MIT License.
