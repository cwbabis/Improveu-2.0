var mongoose = require('mongoose');
var bcrypt = require("bcrypt-nodejs")

var UserSchema = mongoose.Schema({
  username: {
    type: String,
    index:true
  },
  password: {
    type: String
  },
  email: {
    type: String
  },
  name: {
    type: String
  }
});

UserSchema.methods.generateHash = function(password) {
  console.log("encrypt is working")
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
UserSchema.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.password);
};

const User = mongoose.model('User', UserSchema);

module.exports = User
