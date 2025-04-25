const express = require("express");
const {
  allUsers,
  createUser,
  getUser,
  updateUser,
  deleteUser,
} = require("../controller/users.js");

const router = express.Router();

router.route("/").get(allUsers).patch(updateUser).delete(deleteUser);
router.route("/create").post(createUser);
router.route("/:username").get(getUser);

module.exports = router;
