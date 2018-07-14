const db = require("../models");
const passport = require("passport");

module.exports = app => {
    // auth login
    // render your react login screen / component
  app.get("/", (req, res) => {
    
  });

    // auth logout
  app.get("/logout", (req, res) => {
    // handle with passport
    res.send("Logging out!")
});

    // auth with google
  app.get("/google", passport.authenticate('google', {
    scope: ['profile']
  }));

}
