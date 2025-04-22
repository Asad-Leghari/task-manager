const Model = require("../model/tasks");

const getAllTasks = (req, res) => {
  res.status(200).json("hello");
};

const createTask = async (req, res) => {
  try {
    const data = req.body;
    const create_task = await Model.create(data);
    res.status(201).json(create_task);
  } catch (error) {
    console.log(error);
    res.status(404).json("something went wrong");
  }
};

const getSingleTask = (req, res) => {
  res.status(200).json("hello");
};

const deleteTask = (req, res) => {
  res.status(200).json("hello");
};

const updateTask = (req, res) => {
  res.status(200).json("hello");
};

module.exports = {
  getAllTasks,
  createTask,
  getSingleTask,
  deleteTask,
  updateTask,
};
