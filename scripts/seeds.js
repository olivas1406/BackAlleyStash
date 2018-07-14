const mysql2 = require("mysql2");
const db = require("../models");
mysql2.Promise = global.Promise;
const seeds = require("../souce/scripts/seeds.sql");
// This file empties the Books collection and inserts the books below

mysql2.connect(
  process.env.MYSQL2_URI || "mysql2://localhost/",
  {
    usemysql2Client: true
  }
);

db.stash
  .remove({})
  .then(() => db.stash.collection.insertMany(seeds))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
