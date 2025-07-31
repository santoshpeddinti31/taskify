//load env variables for developmode only
if (process.env.NODE_ENV != "production") {
  require("dotenv").config();
}

//import dependencies
const express = require("express");
const app = express();
const connectToDb = require("./src/config/connectToDb");
const todoController = require("./src/controllers/todoController");
const userController = require("./src/controllers/userController");
const cookieParser = require("cookie-parser");
const authMiddleWare = require("./src/middleware/requireAuth");
const mongoose = require("mongoose");

//configure express app
app.use(express.json());
app.use(cookieParser());

const cors = require("cors");

const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));

//connect to database
connectToDb();

//Routing
app.post("/signup", userController.signup);
app.post("/login", userController.login);
app.get("/logout", userController.logout);
app.get("/check-auth", authMiddleWare, userController.checkAuth);
app.get("/todos", authMiddleWare, todoController.fetchTodos);
app.get("/todos/:id", authMiddleWare, todoController.fetchTodo);
app.post("/todos", authMiddleWare, todoController.createTodo);
app.put("/todos/:id", authMiddleWare, todoController.updateTodo);
app.delete("/todos/:id", authMiddleWare, todoController.deleteTodo);

//start our server
app.listen(process.env.PORT, () =>
  console.log(`Server running on http://localhost:${process.env.PORT}`)
);
