var mongoose = require("mongoose");
var Schema = mongoose.Schema;

const photoSchema = new Schema({
    img: {
        data: Buffer, 
        contentType: String
    },
    creatorID: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
});

const Photo = mongoose.model("Photo", photoSchema);

module.exports = Photo