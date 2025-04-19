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
    const create_user = await Model.create(data);
    const user = await create_user.save();
    await res.status(201).json(user);
  } catch (error) {
    console.log(error);
  }
};

const getUser = (req, res) => {
  res.status(200).json("user");
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
