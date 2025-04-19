const mongoose = require("mongoose");

const connectDB = async (url) => {
  try {
    console.log("connecting to db...");
    await mongoose.connect(url);
    console.log("connection established mongodb at:", process.env.MONGO_URI);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { connectDB };
