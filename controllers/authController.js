var bcrypt = require('bcryptjs');
var User = require("../models/user");

module.exports = {
signup: function(req, res) {
  res.render("signup");
},

signin: function(req, res) {
  res.render("signin");
},

dashboard: function(req, res) {
  res.render("dashboard");
},

createUser: function (req, res) {
    User
    .create(req.body)
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
},

getUserByUsername: function(username, callback){
    var query = {username: username};
    User.findOne(query, callback);
  },
  
getUserById: function(id, callback){
    User.findById(id, callback);
  },
  
comparePassword: function(candidatePassword, hash, callback){
    bcrypt.compare(candidatePassword, hash, function(err, isMatch) {
      if(err) throw err;
      callback(null, isMatch);
    });
  }
}