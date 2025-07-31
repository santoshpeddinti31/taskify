const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    index: true,
  },
  password: {
    type: String,
    required: true,
  },
  todos: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Todo",
  },
});

const User = mongoose.model("User", userSchema);
module.exports = User;
