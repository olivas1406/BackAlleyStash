const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const sequelize = require("sequelize");
const passportSetup = require('./config/passport-setup');

// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Serve up static assets (usually on heroku)
app.use(express.static("build"));
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.get("/", function(req, res) {
  res.sendFile("build/index.html");
});

// Define routes here
const db = require("./models");

// Require routes
require("./routes/api/api")(app);
require("./routes/authRoutes")(app);

db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});

// checkout concurrently to install into package.json to connect front and back servers 
// app.listen(PORT, function() {
//   console.log("App listening on PORT " + PORT);
// });
