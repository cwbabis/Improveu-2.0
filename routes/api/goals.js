const router = require("express").Router();
const improveuController = require("../../controllers/improveuController");

// Matches with "/api/goals"
router.route("/")
  .get(improveuController.findAllGoals)
  .post(improveuController.createGoal);

// Matches with "/api/goals/:id"
router
  .route("/:id")
  .get(improveuController.findGoalById)
  .put(improveuController.updateGoal)
  .delete(improveuController.removeGoal);

module.exports = router;
