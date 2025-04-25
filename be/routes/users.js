const express = require("express");
const {
  allUsers,
  createUser,
  getUser,
  updateUser,
  deleteUser,
} = require("../controller/users.js");

const router = express.Router();

router.route("/").get(allUsers).patch(updateUser);
router.route("/create").post(createUser);
router.route("/:username").get(getUser).delete(deleteUser);

module.exports = router;
