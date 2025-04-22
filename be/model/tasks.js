const mongoose = require("mongoose");

const TaskShcema = new mongoose.Schema(
  {
    author: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      required: true,
    },
    title: {
      type: String,
      trim: true,
      require: [true, "title is required"],
    },
    content: {
      type: String,
      trim: true,
      require: [true, "content is required"],
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

const Task = mongoose.model("Task", TaskShcema);

module.exports = Task;
