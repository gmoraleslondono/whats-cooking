# What's Cooking?

This project is a web application that allows users to explore meal recipes by categories, search for meals by ingredients, and manage their favorite meals. The application consists of a frontend built with React, TypeScript, and Vite, and a backend built with Node.js, Express, and PostgreSQL.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Application](#running-the-application)
  - [Running the Backend](#running-the-backend)
  - [Running the Frontend](#running-the-frontend)
- [Project Structure](#project-structure)
- [License](#license)

## Features

- Explore meal recipes by categories
- Search for meals by ingredients
- View detailed information about a meal
- Manage favorite meals

## Prerequisites

- Node.js (v14 or higher)
- Docker (for running PostgreSQL database)

## Installation

1. Clone the repository:

```sh
  git clone https://github.com/your-username/whats-cooking.git
  cd whats-cooking
```

2. Install dependencies for both frontend and backend:

### Install backend dependencies

```
cd backend
npm install
```

### Install frontend dependencies

```
cd ../frontend
npm install
```

## Running the Application

### Running the Backend

1. Create a .env file in the backend directory with the following content:

```
DB_USER=your_db_user
DB_PASSWORD=your_db_password
DB_DATABASE=your_db_name
DB_HOST=your_db_host
DB_PORT=5432
```

2. Start the PostgreSQL database using Docker:

```
cd backend
docker-compose up -d
```

3. Start the backend server:

```
npm run dev
```

The backend server will be running on http://localhost:3000.

### Running the Frontend

1. Create a .env file in the frontend directory with the following content:

```
VITE_API_URL=http://localhost:3000
```

2. Start the frontend development server:

```
cd frontend
npm run dev
```

The frontend application will be running on http://localhost:5173.

## License

This project is licensed under the MIT License.
