var mongoose = require("mongoose");
var Schema = mongoose.Schema;

const imageSchema = new Schema({
    imageName: {
        type: String,
        default: "none",
        required: true
    },
    imageData: {
        type: String,
        required: true
    },
    creatorID: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
});

const Image = mongoose.model("Image", imageSchema);

module.exports = Image;