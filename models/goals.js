const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const goalSchema = new Schema({
    title: String,
    goal: String,
    image: String,
    creatorID: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    partnerID: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
});

const Goal = mongoose.model("Goal", goalSchema);

module.exports = Goal