const router = require("express").Router();
const goalRoutes = require("./goals");
const userRoutes = require("./users")

// goal routes
router.use("/goals", goalRoutes);

// user routes
router.use("/user", userRoutes);

module.exports = router;
