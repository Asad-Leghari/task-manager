const Model = require("../model/user");

const register = async (req, res) => {
  try {
    const body = req.body;
    const user = await Model.create(body);
    return await res.status(201).json(user);
  } catch (error) {
    console.log(error);
    if (error.code === 11000) {
      res.status(404).json({
        error: `${Object.keys(error.keyValue)[0]}: ${
          error.keyValue[Object.keys(error.keyValue)[0]]
        } already exists`,
      });
    }
  }
};

const login = async (req, res) => {
  try {
    return await res.status(201).json({});
  } catch (error) {
    console.log(error);
  }
};

const controllers = { register, login };
module.exports = controllers;
