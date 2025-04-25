const Model = require("../model/user");
const jwt = require("jsonwebtoken");
const argon2 = require("argon2");

const generateTokens = (user) => {
  const payload = {
    id: user._id,
    first_name: user.firstname,
    last_name: user.lastname,
    username: user.username,
  };
  const accessToken = jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: "15m",
  });

  const refreshToken = jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });

  return { accessToken, refreshToken };
};

const register = async (req, res) => {
  try {
    const { firstname, lastname, username, password } = req.body;
    const hashedPassword = await argon2.hash(password);

    const user = await Model.create({
      firstname,
      lastname,
      username,
      password: hashedPassword,
    });

    const { accessToken, refreshToken } = generateTokens(user);

    return res.status(201).json({
      accessToken,
      refreshToken,
    });
  } catch (error) {
    console.log(error);
    if (error.code === 11000) {
      res.status(400).json({
        error: `${Object.keys(error.keyValue)[0]}: ${
          error.keyValue[Object.keys(error.keyValue)[0]]
        } already exists`,
      });
    } else {
      res.status(500).json({ error: "Internal server error" });
    }
  }
};

const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await Model.findOne({ username });
    if (!user) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    const isPasswordValid = await argon2.verify(user.password, password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    const { accessToken, refreshToken } = generateTokens(user);

    return res.status(200).json({
      accessToken,
      refreshToken,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const refreshToken = async (req, res) => {
  try {
    const { refreshToken } = req.body;

    if (!refreshToken) {
      return res.status(401).json({ error: "Refresh token is required" });
    }

    const decoded = jwt.verify(refreshToken, process.env.JWT_SECRET);
    const user = await Model.findById(decoded.id);

    if (!user) {
      return res.status(401).json({ error: "Invalid refresh token" });
    }

    const { accessToken, refreshToken: newRefreshToken } = generateTokens(user);

    return res.status(200).json({
      accessToken,
      refreshToken: newRefreshToken,
    });
  } catch (error) {
    console.log(error);
    if (error.name === "JsonWebTokenError") {
      return res.status(401).json({ error: "Invalid refresh token" });
    }
    res.status(500).json({ error: "Internal server error" });
  }
};

const controllers = { register, login, refreshToken };
module.exports = controllers;
