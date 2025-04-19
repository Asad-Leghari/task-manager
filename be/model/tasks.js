const mongoose = require("mongoose");

const TaskShcema = new mongoose.Schema({
  firstName: {
    type: String,
    trim: true,
    require: [true, "First Name is required"],
  },
  lastName: {
    type: String,
    trim: true,
    require: [true, "Last Name is required"],
  },
});

const Task = mongoose.model("Task", TaskShcema);

module.exports = Task;
