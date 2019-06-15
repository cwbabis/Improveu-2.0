const router = require("express").Router();
const goalRoutes = require("./goals");

// goal routes
router.use("/goals", goalRoutes);

module.exports = router;
