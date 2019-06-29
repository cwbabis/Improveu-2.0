var bCrypt = require("bcrypt-nodejs");


module.exports = function(passport, user) {
    var User = require("../models/user");
  var LocalStrategy = require("passport-local").Strategy;

  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });
  passport.deserializeUser(function(id, done) {
    user.findOne({ where: { id: id } }).then(function(user) {
      if (user) {
        done(null, user.get());
      } else {
        done(user.errors, null);
      }
    });
  });
  passport.use(
    "local-signup",
    new LocalStrategy(
      {
        usernameField: "username",
        passwordField: "password",
        passReqToCallback: true // allows us to pass back the entire request to the callback
      },

      function(req, username, password, done) {
        var generateHash = function(password) {
          return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null);
        };
        User.findOne({
          where: {
            username: username
          }
        }).then(function(user) {
          if (user) {
            return done(null, false, {
              message: "That username is already taken"
            });
          } else {
            var userPassword = generateHash(password);

            var data = {
              username: req.body.username,

              password: userPassword
            };

            User.create(data).then(function(newUser) {
              if (!newUser) {
                return done(null, false);
              }
              if (newUser) {
                return done(null, newUser);
              }
            });
          }
        });
      }
    )
  );
  passport.use(
    "local-login",
    new LocalStrategy(
      {
        // by default, local strategy uses username and password, we will override with username

        usernameField: "username",

        passwordField: "password",

        passReqToCallback: true // allows us to pass back the entire request to the callback
      },

      function(req, username, password, done) {
        console.log("here");
        var User = require("../models/user");

        var isValidPassword = function(userpass, password) {
          return bCrypt.compareSync(password, userpass);
        };
        User.getUserByUsername(username, function(err, user) {

            if(err)
                return done(err);

            if(!user)
                return done(null, false);

            if((user.password === password))
                return done(null, false);
            console.log("test");
    
            return done(null, user);
        });
    }
    )
  );
};