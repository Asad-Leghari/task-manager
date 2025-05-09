const passport = require("passport");
const { Strategy: JwtStrategy, ExtractJwt } = require("passport-jwt");
const User = require("../model/user");

const opts = {
  jwtFromRequest: ExtractJwt.fromBodyField("refreshToken"),
  secretOrKey: process.env.JWT_REFRESH_SECRET || "secret123",
};

passport.use(
  "jwt-refresh",
  new JwtStrategy(opts, async (jwt_payload, done) => {
    try {
      const user = await User.findById(jwt_payload.id);
      if (user) return done(null, user);
      return done(null, false);
    } catch (err) {
      return done(err, false);
    }
  })
);
