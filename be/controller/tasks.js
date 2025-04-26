const Model = require("../model/tasks");

const getAllTasks = (req, res) => {
  res.status(200).json("hello");
};

const createTask = async (req, res) => {
  try {
    const data = req.body;
    const userID = req.user.id;
    if (data.author) {
      return res.status(401).json({
        forbidden: "you do not have access ",
      });
    }
    const create_task = await Model.create({ author: userID, ...data });
    res.status(201).json(create_task);
  } catch (error) {
    console.log(error);
    res.status(404).json("something went wrong");
  }
};

const getSingleTask = async (req, res) => {
  try {
    const singletask = await Model.findOne();
  } catch (error) {
    console.log(error);
  }
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
