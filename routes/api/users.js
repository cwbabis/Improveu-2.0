const router = require("express").Router();
const improveuController = require("../../controllers/improveuController");

// Matches with "/api/goals"
router.route("/")
  .get(improveuController.findAll)
  .post(improveuController.create);

// Matches with "/api/goals/:id"
router
  .route("/:id")
  .get(improveuController.findById)
  .put(improveuController.update)
  .delete(improveuController.remove);

module.exports = router;