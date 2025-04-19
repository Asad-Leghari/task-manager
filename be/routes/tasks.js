const express = require("express");
const { getAllTasks } = require("../controller/tasks.js");

const router = express.Router();

router.get("/", getAllTasks);

module.exports = router;
