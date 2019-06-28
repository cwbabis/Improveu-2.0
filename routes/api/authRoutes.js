const router= require("express").Router();
const passport = require("passport");


  router.post(
    "/signup",
    passport.authenticate("local-signup", {
      successRedirect: "/dashboard",

      failureRedirect: "/#"
    })
  );

  router.post(
    "/signin",
    passport.authenticate("local-login", {
      successRedirect: "/dashboard",

      failureRedirect: "/#"
    })
  );

  function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
      return next();
    }
    res.redirect("/signin");
  }


  module.exports = router;
