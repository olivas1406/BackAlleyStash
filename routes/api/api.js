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

  app.get("/api/account/:bot10", (req, res) => {
    db.Account.findAll({limit: 10
    order:[TimeStamp, 'DESC']}).then(data => {
      console.log(data);
      res.json(data);
    });
  });

  app.get("/api/account/:last30days", (req, res) => {
    db.Account.findAll({ where: sequelize.where(sequelize.fn('datediff', sequelize.fn("NOW"))),
      {$gt: 30}.then(data => {
      console.log(data);
      res.json(data);
    });
  });




  app.get("/api/account/", (req, res) => {

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

  // Get route to /api/category
  app.get("/api/category", (req, res) => {
    db.Category.findAll({}).then(data => {
      console.log(data);
      res.json(data);
    });
  });

  // Post route to /api/category
  app.post("/api/category", (req, res) => {
    db.Category.create(req.body).then(data => {
      res.json(data);
    });
  });

  // Get route to /api/accountType
  app.get("/api/accountType", (req, res) => {
    db.AccountType.findAll({}).then(data => {
      console.log(data);
      res.json(data);
    });
  });

  // Post route to /api/accountType
  app.post("/api/accountType", (req, res) => {
    db.AccountType.create(req.body).then(data => {
      res.json(data);
    });
  });

  // Get route to /api/authentication
  app.get("/api/authentication", (req, res) => {
    db.Authentication.findAll({}).then(data => {
      console.log(data);
      res.json(data);
    });
  });

  // Post route to /api/authentication
  app.post("/api/authentication", (req, res) => {
    db.Authentication.create(req.body).then(data => {
      res.json(data);
    });
  });
};
