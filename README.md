# 📝 MERN Todo App (Frontend)

This is the **frontend** of a full-stack CRUD application built using **React**. It includes **user authentication** (signup, login, logout), **protected routes**, and a todo management system. The backend is built with **Node.js**, **Express**, and **MongoDB**, and authentication is handled with **JWT and cookies**.

## 🚀 Features

- 🔐 User Signup and Login
- ✅ JWT-based Authentication with Protected Routes
- 🧾 Create, Read, Update, Delete (CRUD) Todos
- 🌐 React Router for Navigation
- 🧱 Zustand for Global Auth State Management
- 💅 Tailwind CSS for Styling

## 📁 Project Structure

```
frontend/
├── public/
├── src/
│   ├── components/
│   │   ├── LoginForm.jsx
│   │   ├── SignupForm.jsx
│   │   └── RequiredAuth.jsx
│   ├── pages/
│   │   ├── LoginPage.jsx
│   │   ├── SignupPage.jsx
│   │   ├── LogoutPage.jsx
│   │   └── TodoPage.jsx
│   ├── store/
│   │   └── authStore.js
│   ├── App.js
│   └── index.css
├── .gitignore
├── package.json
└── README.md
```

## 🔧 Installation

1. **Clone the full project:**

```bash
git clone https://github.com/yourusername/mern-todo-app.git
cd mern-todo-app/frontend
```

2. **Install dependencies:**

```bash
npm install
```

3. **Start the development server:**

```bash
npm run dev
# or
npm start
```

Make sure your **backend server is running** at `http://localhost:8000` or update the API URL in your axios calls accordingly.

## 🧠 Tech Stack

- **React** – Frontend Library
- **React Router DOM** – Routing
- **Zustand** – State Management
- **Tailwind CSS** – UI Styling
- **Axios** – API Communication
- **JWT** – Token-based Authentication (via cookies)
- **Express + MongoDB** – (Backend, in another folder)

## 🔒 Auth Flow

- User signs up or logs in via forms.
- JWT is created and stored in **HttpOnly cookie** by backend.
- `authStore.js` manages the login status using Zustand.
- `RequireAuth.jsx` guards protected routes (`/` → TodoPage).
- Logout clears the cookie and updates auth state.

## 🔗 Routing Structure

| Path      | Component  | Protected |
| --------- | ---------- | --------- |
| `/`       | TodoPage   | ✅ Yes    |
| `/login`  | LoginPage  | ❌ No     |
| `/signup` | SignupPage | ❌ No     |
| `/logout` | LogoutPage | ✅ Yes    |

## 🌍 Environment Setup

No `.env` needed on the frontend, unless you're using a proxy or want to store the API base URL. If needed:

```env
VITE_API_URL=http://localhost:8000
```

Use it like:

```js
axios.get(`${import.meta.env.VITE_API_URL}/todos`);
```

## 🛠 Improvements Ideas

- Add loading and error UI
- Add edit mode for todos
- Form validations
- Token refresh mechanism
- Responsive design

## 📸 Screenshots

## 👨‍💻 Author

**Santosh Peddinti**  
📧 santoshpeddinti@gmail.com
