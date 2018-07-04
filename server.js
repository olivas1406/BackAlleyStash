const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const PORT = process.env.PORT || 3000;
const app = express();
const sequelize = require("sequelize");
const mysql = require("mysql");

// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define routes here
const db = require("./models");

app.get("/", (req, res) => {
  res.send("See routes: /api/transaction or /api/user");
});

// Get route to /api/transaction
app.get("/api/transaction", (req, res) => {
  db.Transaction.findAll({}).then(data => {
    console.log(data);
    res.json(data);
  });
});

// Post route to /api/transaction\
app.post("/api/transaction", (req, res) => {
  db.Transaction.create(req.body).then(data => {
    res.json(data);
  });
});

// Get route to /api/user
app.get("/api/user", (req, res) => {
  db.User.findAll({}).then(data => {
    console.log(data);
    res.json(data);
  });
});

// Post route to /api/user
app.post("/api/user", (req, res) => {
  db.User.create(req.body).then(data => {
    res.json(data);
  });
});

db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
