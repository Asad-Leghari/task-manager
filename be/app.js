const express = require("express");
const route = require("./routes/tasks.js");

const app = express();

app.use("/api/v1/tasks", route);
app.get("/", (req, res) => {
  res.send("Hello World!");
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
