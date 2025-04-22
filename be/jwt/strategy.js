var passport = require("passport");
var LocalStrategy = require("passport-local");

passport.use(
  new LocalStrategy(function verify(username, password, cb) {
    return true;
  })
);
