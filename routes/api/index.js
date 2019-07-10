const router = require("express").Router();
const goalRoutes = require("./goals");
const userRoutes = require("./users");
const passportRoutes = require("./authRoutes")
const commentRoutes = require("./comment");

// goal routes
router.use("/goals", goalRoutes);

// user routes
router.use("/user", userRoutes);

router.use("/passport", passportRoutes);

router.use("/comment", commentRoutes)

module.exports = router;
