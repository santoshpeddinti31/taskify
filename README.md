# Todo App with User Authentication

## Project Overview

This is a full-stack Todo application that allows users to register, log in, and manage their tasks. The app uses JWT-based authentication, ensuring that only authenticated users can access their tasks. It implements CRUD operations for managing tasks and includes a responsive, user-friendly interface built with React and styled using Chakra UI. The backend is powered by Node.js, Express, and MongoDB.

## Features

- User Authentication: Users can register, log in, and access their profile information.
- Task Management: Users can create, read, update, and delete their tasks.
- JWT Authentication: Secure authentication using JSON Web Tokens.
- Responsive UI: Built with React and styled using Chakra UI.

## Technologies Used

- **Frontend**: React, Chakra UI, Axios
- **Backend**: Node.js, Express, MongoDB, JWT, bcryptjs
- **Authentication**: JWT (JSON Web Tokens)
- **Database**: MongoDB

## Project Structure

├── client # Frontend (React app)
│ ├── public # Public files for the Frontend
│ └── src # React source files
│ ├── components # React components (Login, Register, TaskDashboard)
│ ├── pages # Page components (Home, Dashboard)
│ ├── services # Axios configurations for API calls
│ └── App.js # Main React app entry point
├── server # Backend (Express API)
│ ├── config # MongoDB connection config
│ ├── middleware # JWT middleware
│ ├── models # Mongoose schemas (User, Task)
│ ├── routes # API routes (auth, tasks)
│ └── server.js # Main backend entry point
├── package.json # Dependencies and scripts for the project
└── README.md # Project documentation

bash
Copy
Edit

## Prerequisites

Before you begin, ensure you have the following installed on your local machine:

- Node.js
- MongoDB
- Git

## Installation and Setup

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/todo-app.git
cd todo-app
2. Install Dependencies
For the Backend:

bash
Copy
Edit
cd server
npm install
For the Frontend:

bash
Copy
Edit
cd client
npm install
3. Set Up Environment Variables
In the server directory, create a .env file with the following contents:

ini
Copy
Edit
MONGO_URI=mongodb+srv://username:<password>@cluster.mongodb.net/todo-app?retryWrites=true
JWT_SECRET=yourSecretKey
PORT=5000
4. Running the Application
Running the Backend:

bash
Copy
Edit
cd server
npm run dev
Running the Frontend:

bash
Copy
Edit
cd client
npm start
The backend will run on http://localhost:5000, and the frontend will run on http://localhost:3000.

API Endpoints
Auth Endpoints
POST /api/auth/register: Register a new user

POST /api/auth/login: Log in a user

Task Endpoints
GET /api/tasks: Get all tasks for the logged-in user

POST /api/tasks: Create a new task

PUT /api/tasks/:id: Update an existing task

DELETE /api/tasks/:id: Delete a task

Authentication Flow
On login, the server hashes the user’s password and verifies credentials.

If successful, the server creates a JWT token and sets it as an HTTP-only cookie.

Protected routes require this cookie for user authentication.

The authMiddleware validates the JWT and attaches the authenticated user to the request.

Todo Data Model
Each todo item contains the following fields:

taskName (String)

taskDesc (String)

user (ObjectId referencing User) — links the todo to the user who created it

Running the Full Application
Start MongoDB locally or connect to a MongoDB Atlas cluster.

Run the backend server (npm run dev) — listens on port 5000 by default.

Run the React frontend (npm start) — runs on port 3000 by default.

Access the app via http://localhost:3000 in your browser.

Sign up and log in to manage your personal todo list.

Troubleshooting Tips
Ensure MongoDB is running and accessible.

Check .env variables are correctly configured.

Verify backend server is running and reachable.

Make sure frontend and backend ports match the Axios baseURL and CORS settings.

Cookies must be enabled and allowed by the browser for authentication to work properly.

Check browser console and server logs for error details (e.g., 400 Bad Request, 401 Unauthorized).

Future Improvements
Add password reset functionality.

Add user profile management.

Improve UI/UX with better error handling and form validation.

Implement pagination or search for todos.

Deploy to cloud hosting services for production use
```
