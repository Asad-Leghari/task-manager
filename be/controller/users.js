const Model = require("../model/user");
const username_generator = require("unique-username-generator");

const allUsers = async (req, res) => {
  try {
    const data = await Model.find({}).populate("tasks");
    return await res.status(200).json(data);
  } catch (error) {
    console.log(error);
  }
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
    const { username } = req.params;
    const user = await Model.findOne({ username }).populate("tasks");
    if (!user) {
      return res.status(404).json({ msg: "User not found" });
    }
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
  }
};

const updateUser = async (req, res) => {
  try {
    const { username } = req.params;
    const payload = req.body;
    const data = await Model.updateOne({ username: username }, payload);
    return res.status(200).json(data);
  } catch (error) {
    console.log(error);
  }
  res.status(200).json("updated user");
};

const deleteUser = async (req, res) => {
  try {
    const { username } = req.params;
    const data = await Model.findOneAndDelete({ username });
    return res.status(202).json(data);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  allUsers,
  createUser,
  getUser,
  updateUser,
  deleteUser,
};
