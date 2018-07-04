const router = require("express").Router();
const controller = require("../../config/config.json");

// Matches with "/api/transaction"
router
  .route("/")
  .get(controller.findAll)
  .post(controller.create);

// Matches with "/api/transaction/:id"
router
  .route("/:id")
  .get(controller.findById)
  .put(controller.update)
  .delete(controller.remove);

module.exports = router;
