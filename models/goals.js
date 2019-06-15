const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const goalSchema = new Schema({
    title: String,
    goal: String
});

const Goal = mongoose.model("Goal", goalSchema);

module.exports = Goal