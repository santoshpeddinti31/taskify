# 📝 Todo App with User Authentication (Node.js + Express + MongoDB + JWT)

This is a full-featured backend application built with **Node.js**, **Express**, and **MongoDB**, supporting:

- 🔐 JWT-based user authentication
- 🗂️ User registration and login
- ✅ Auth-protected routes using middleware
- 📝 CRUD operations for Todos
- 🍪 Cookie-based token storage

---

## 📁 Folder Structure

```
project/
├── src/
│   ├── config/
│   │   └── connectToDb.js
│   ├── controllers/
│   │   ├── todoController.js
│   │   └── userController.js
│   ├── middleware/
│   │   └── requireAuth.js
│   ├── models/
│   │   ├── todo.js
│   │   └── user.js
├── .env
├── package.json
├── server.js (or index.js)
```

---

## 🛠️ Tech Stack

- **Node.js**
- **Express.js**
- **MongoDB** with **Mongoose**
- **JWT** for authentication
- **cookie-parser** for reading tokens from cookies
- **CORS** for frontend-backend communication

---

## 🚀 Getting Started

### 1. Clone the Repo

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Create `.env` File

```env
PORT=5000
MONGO_URL=mongodb://localhost:27017/your-db
SECRET=yourVerySecretKey1234567890
NODE_ENV=development
```

### 4. Run the Server

```bash
node server.js
# or
nodemon server.js
```

---

## ✨ Features

### 🔐 Authentication

- **Signup** → `POST /signup`
- **Login** → `POST /login`
- **Logout** → `GET /logout`
- **Check Auth** → `GET /check-auth` _(protected)_

### 📝 Todos (Protected Routes)

- **Get All Todos** → `GET /todos`
- **Get One Todo** → `GET /todos/:id`
- **Create Todo** → `POST /todos`
- **Update Todo** → `PUT /todos/:id`
- **Delete Todo** → `DELETE /todos/:id`

> All routes use `authMiddleware` to verify JWT token from cookies.

---

## 🔐 Token & Middleware Logic

- JWT token is generated on login using:
  ```js
  jwt.sign({ sub: user._id }, process.env.SECRET, { expiresIn: "1h" });
  ```
- Token is saved to browser via:
  ```js
  res.cookie("Authorization", token, { httpOnly: true });
  ```
- Token is verified using:
  ```js
  jwt.verify(token, process.env.SECRET);
  ```

---

## ✅ Models

### 📄 User Model

```js
email: { type: String, required: true, unique: true },
password: { type: String, required: true },
notes: { type: mongoose.SchemaTypes.ObjectId, ref: "Note" }
```

### 📋 Todo Model

```js
taskName: String,
taskDesc: String,
user: { type: mongoose.SchemaTypes.ObjectId, ref: "User" }
```

---

## 🔧 Dependencies

- express
- mongoose
- dotenv
- jsonwebtoken
- cookie-parser
- cors

Install them using:

```bash
npm install express mongoose dotenv jsonwebtoken cookie-parser cors
```

---

## 💡 Additional Notes

- Uses `HttpOnly` cookies to store tokens for better security.
- Tokens expire in 1 hour (`expiresIn: "1h"`).
- All todos are user-specific, linked via the `user` field in the Todo model.

---

## 📬 Contact

For questions or feedback:

**Developer**:Fullstack developer  
**Email**: "santoshpeddinti2@gmail.com"
**GitHub**: santosh peddinti

---
