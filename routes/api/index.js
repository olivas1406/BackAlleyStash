const router = require("express").Router();
const routes = require("./api");

// Book routes
router.use("/transaction", routes);

module.exports = router;
