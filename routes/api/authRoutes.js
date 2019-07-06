const router= require("express").Router();
const passport = require("passport");


  router.post(
    "/signup",
    passport.authenticate("local-signup", {
      successRedirect: "/dashboard",

      failureRedirect: "/#"
    })
  );

  router.post('/login', function(req, res, next) {
    passport.authenticate('local-login', function(err, user, info) {
      if (err) { return next(err); }
      // Redirect if it fails
      if (!user) { return res.redirect('/#'); }
      req.logIn(user, function(err) {
        if (err) { return next(err); }
        // Redirect if it succeeds
        return res.redirect('/dashboard')
      });
    })(req, res, next);
  });

  function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
      return next();
    }
    res.redirect("/signin");
  }


  module.exports = router;
