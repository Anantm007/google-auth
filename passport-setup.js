const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth2").Strategy;

// Config variables
require("dotenv").config();
const {
  GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET,
  GOOGLE_CALLBACK_URL,
} = process.env;

passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (user, done) {
  done(null, user);
});

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: GOOGLE_CALLBACK_URL,
      passReqToCallback: true,
    },
    function (request, accessToken, refreshToken, profile, done) {
      console.log(profile);
      return done(null, profile);
    }
  )
);
