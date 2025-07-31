const Todo = require("../models/todo");

async function fetchTodos(req, res) {
  try {
    // find the notes
    const todos = await Todo.find({ user: req.user._id });

    //respond with them
    res.json({ todos });
  } catch (err) {
    console.log(err);
    res.sendStatus(400);
  }
}

async function fetchTodo(req, res) {
  try {
    // get id off the url
    const todoId = req.params.id;

    //Find the note using the id
    const todo = await Todo.findOne({ _id: todoId, user: req.user._id });

    //respond with the note
    res.json({ todo });
  } catch (err) {
    console.log(err);
    res.sendStatus(400);
  }
}

async function createTodo(req, res) {
  try {
    // send the data to the requrest body
    const { taskname, taskdesc } = req.body;

    if (!taskname || !taskdesc) {
      return res.status(400).json({ message: "Missing fields" });
    }

    //create a note with it
    const todo = await Todo.create({
      taskname,
      taskdesc,
      user: req.user._id,
    });

    console.log("Body:", req.body);
    console.log("User:", req.user);
    res.status(201).json({ todo });
  } catch (err) {
    console.log("Create Todo Error:", err);
    res.status(400).json({ message: "Bad Request" });
  }
}

async function updateTodo(req, res) {
  try {
    //get the id of the url
    const todoId = req.params.id;

    //get the data of the req body
    const { taskname, taskdesc } = req.body;

    //find and update the record
    await Todo.findOneAndUpdate(
      {
        _id: todoId,
        user: req.user._id,
      },
      { taskname, taskdesc }
    );

    //Find updated note
    const todo = await Todo.findById(todoId);

    //respond with it
    res.json({ todo });
  } catch (err) {
    console.log(err);
  }
}

async function deleteTodo(req, res) {
  try {
    //get id of url
    const todoId = req.params.id;

    //delete the record
    await Todo.deleteOne({ _id: todoId, user: req.user._id });

    res.json({ success: "Record deleted" });
  } catch (err) {
    console.log(err);
    res.sendStatus(400);
  }
}

module.exports = {
  fetchTodos,
  fetchTodo,
  createTodo,
  updateTodo,
  deleteTodo,
};
