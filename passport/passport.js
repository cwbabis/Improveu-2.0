var bCrypt = require("bcrypt-nodejs");
var passport = require('passport');
var User = require("../models/user");
var LocalStrategy = require('passport-local').Strategy;

module.exports = function(passport) {

    passport.serializeUser(function(user, done) {
        console.log('serializing user: ');console.log(user);
        done(null, user._id);
    });

    passport.deserializeUser(function(id, done) {
        User.findById(id, function(err, user) {
            console.log('deserializing user:',user);
            done(err, user);
        });
    });

/*     passport.use('local-signin', new LocalStrategy({
        passReqToCallback : true
    },
    function(req, username, password, done) { 
        // check in mongo if a user with username exists or not
        User.findOne({ 'username' :  username }, 
            function(err, user) {
                // In case of any error, return using the done method
                if (err)
                    return done(err);
                // Username does not exist, log the error and redirect back
                if (!user){
                    console.log('User Not Found with username '+username);
                    
                }
                // User exists but wrong password, log the error 
                if (!isValidPassword(user, password)){
                    console.log('Invalid Password');
                    
                }
                // User and password both match, return user from done method
                // which will be treated like success
                return done(null, user);
            }
        );

    })
); */

passport.use('local-login', new LocalStrategy({

    passReqToCallback : true
},
function(req, username, password, done) {

    User.getUserByUsername(username, function(err, user) {
        if(err)
            return done(err);

        if(!user)
            return done(null, false);

        if(!isValidPassword(user, password))
            return done(null, false);
        console.log("test");

        return done(null, user);
    });
}));


var isValidPassword = function(user, password){
    return bCrypt.compareSync(password, user);
}
passport.use('local-signup', new LocalStrategy({
    passReqToCallback : true // allows us to pass back the entire request to the callback
},
function(req, username, password, done) {

    findOrCreateUser = function(){
        // find a user in Mongo with provided username
        User.findOne({ 'username' :  username }, function(err, user) {
            // In case of any error, return using the done method
            if (err){
                console.log('Error in SignUp: '+err);
                return done(err);
            }
            // already exists
            if (user) {
                console.log('User already exists with username: '+username);
/*                 return done(null, false, req.flash('message','User Already Exists')); */
            } else {
                // if there is no user with that email
                // create the user
                var newUser = new User();

                // set the user's local credentials
                newUser.username = username;
                newUser.password = createHash(password);
                newUser.email = req.param('email');

                // save the user
                newUser.save(function(err) {
                    if (err){
                        console.log('Error in Saving user: '+err);  
                        throw err;  
                    }
                    console.log('User Registration succesful');    
                    return done(null, newUser);
                });
            }
        });
    };
    // Delay the execution of findOrCreateUser and execute the method
    // in the next tick of the event loop
    process.nextTick(findOrCreateUser);
})
);

// Generates hash using bCrypt
var createHash = function(password){
return bCrypt.hashSync(password, bCrypt.genSaltSync(10), null);
}
}

