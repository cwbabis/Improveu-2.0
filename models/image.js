var mongoose = require("mongoose");
var Schema = mongoose.Schema;

const imageSchema = new Schema({
    img: { data: Buffer, contentType: String }
},

    // creatorID: {
    //     type: Schema.Types.ObjectId,
    //     ref: "User"
    // }
    {
        timestamps: true
    });

const Image = mongoose.model("Image", imageSchema);

module.exports = Image;