const express = require("express");
const app = express();

// Utils and packages
const passport = require("passport");
const cookieSession = require("cookie-session");
require("./passport-setup");

// Initialise cookie session
app.use(
  cookieSession({
    name: "tuto-session",
    keys: ["key1", "key2"],
  })
);

// Setup the templating engine
app.set("view engine", "ejs");

// Auth middleware that checks if the user is logged in
const isLoggedIn = (req, res, next) => {
  if (req.user) {
    next();
  } else {
    res.sendStatus(401);
  }
};

// Initializes passport and passport sessions
app.use(passport.initialize());
app.use(passport.session());

// Example protected and unprotected routes
app.get("/", (req, res) => res.render("pages/index"));
app.get("/failed", (req, res) => res.send("You Failed to log in!"));

// Profile page (protected)
app.get("/good", isLoggedIn, (req, res) => {
  res.render("pages/profile", {
    name: req.user.displayName,
    pic: req.user.photos[0].value,
    email: req.user.emails[0].value,
  });
});

// Auth Routes
app.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

// Redirect URL
app.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/failed" }),
  async (req, res) => {
    return res.redirect("/good");
  }
);

// Logout the user and destroy the session
app.get("/logout", (req, res) => {
  req.session = null;
  req.logout();

  return res.redirect("/");
});

// Starting the server
const PORT = process.env.port || 5000;
app.listen(PORT, async (req, res) =>
  console.log(`Server started on port ${PORT}!`)
);
