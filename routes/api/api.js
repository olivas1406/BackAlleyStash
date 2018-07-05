const db = require("../../models");

module.exports = app => {
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

  // Get route to /api/account
  app.get("/api/account", (req, res) => {
    db.Account.findAll({}).then(data => {
      console.log(data);
      res.json(data);
    });
  });

  // Post route to /api/account
  app.post("/api/account", (req, res) => {
    db.Account.create(req.body).then(data => {
      res.json(data);
    });
  });
};
