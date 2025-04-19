const express = require("express");
const route = require("./routes/tasks.js");
const connectDB = require("./db/connect.js");
require("dotenv").config();

const app = express();
app.use(express.json());

app.use("/api/v1/tasks", route);
app.use("/:id", route);

const PORT = 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);

    app.listen(PORT, () => {
      console.log(`http://localhost:${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
