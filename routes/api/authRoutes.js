var authController = require("../../controllers/authController");
const router= require("express").Router();

module.exports = (passport) => {
  router.get("/signup", authController.signup);

  router.get("/signin", authController.signin);

  router.post(
    "/signup",
    passport.authenticate("local-signup", {
      successRedirect: "/dashboard",

      failureRedirect: "/signup"
    })
  );

  router.post(
    "/api/signin",
    passport.authenticate("local-login", {
      successRedirect: "/dashboard",

      failureRedirect: "/signin"
    })
  );

  function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
      return next();
    }
    res.redirect("/signin");
  }
};

