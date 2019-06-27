const router = require("express").Router();
const goalRoutes = require("./goals");
const userRoutes = require("./users");
const passportRoutes = require("./authRoutes")

// goal routes
router.use("/goals", goalRoutes);

// user routes
router.use("/user", userRoutes);

router.use("/passport", passportRoutes);

module.exports = router;
