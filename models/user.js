const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
    },
    password: String,
    goals: [ {type : mongoose.Schema.ObjectId, ref : 'Goals'} ]
});

const User = mongoose.model("User", userSchema);

module.exports = User