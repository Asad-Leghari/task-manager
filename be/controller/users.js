const Model = require("../model/user");
const username_generator = require("unique-username-generator");

const allUsers = (req, res) => {
  res.status(200).json("all users");
};

const createUser = async (req, res) => {
  try {
    const username = username_generator.generateUsername("-");
    const usernameArr = username.split("-");
    const data = {
      firstname: usernameArr[0],
      lastname: usernameArr[1],
      username: username,
    };
    const user = await Model.create(data);
    await res.status(201).json(user);
  } catch (error) {
    console.log(error);
  }
};

const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await Model.findById(id).populate("tasks");
    if (!user) {
      return res.status(404).json({ msg: "User not found" });
    }
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
  }
};

const updateUser = (req, res) => {
  res.status(200).json("updated user");
};

const deleteUser = (req, res) => {
  res.status(200).json("deleted user");
};

module.exports = {
  allUsers,
  createUser,
  getUser,
  updateUser,
  deleteUser,
};
