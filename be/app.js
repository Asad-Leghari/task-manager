const express = require("express");
const TaskRoutes = require("./routes/tasks.js");
const userRoutes = require("./routes/users.js");
const conn = require("./db/connect.js");
require("dotenv").config();

const app = express();
app.use(express.json());

app.use("/api/v1/users", userRoutes);
app.use("/api/v1/tasks", TaskRoutes);
app.get("/", function (req, res) {
  res.send("hello world");
});

const PORT = 5000;

const start = async () => {
  try {
    await conn.connectDB(process.env.MONGO_URI);
    app.listen(PORT, () => {
      console.log("server running on url:", `http://localhost:${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
