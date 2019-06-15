const router = require("express").Router();
const improveuController = require("../../controllers/improveuController");

// Matches with "/api/user"
router.route("/")
  .get(improveuController.findAllUsers)
  .post(improveuController.createUser);

// Matches with "/api/user/:id"
router
  .route("/:id")
  .get(improveuController.findUserById)
  .put(improveuController.updateUser)
  .delete(improveuController.removeUser);

module.exports = router;