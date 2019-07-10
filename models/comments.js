const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// create new instance of the mongoose.schema. the schema takes an
// object that shows the shape of your database entries.
const CommentsSchema = new Schema({
  author: String,
  text: String,
  creatorID: {
    type: Schema.Types.ObjectId,
    ref: "Goal"
}
}, { timestamps: true });

// export our module to use in server.js
const Comment = mongoose.model('Comment', CommentsSchema);

module.exports = Comment