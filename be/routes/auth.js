const express = require("express");
const { register, login, refreshToken } = require("../controller/auth");
const passport = require("passport");

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post(
  "/refresh-token",
  passport.authenticate("jwt-refresh", { session: false }),
  refreshToken
);

module.exports = router;
