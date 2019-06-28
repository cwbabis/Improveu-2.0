const express = require('express');
const fs = require('fs');
var app = express();
var router = express.Router();
const db = require("../../models");
const storage = multer.diskStorage({
    destination: function (req, res, cb) {
        cb(null, "/uploads")
    },
    filename: function (req, res, cb) {
        cb(null, res.fieldname + "-" + Date.now())
    }
});
const multer = require('multer');
const upload = multer({ storage: storage });
router.route('/uploads')
app.post('/uploadphoto', upload.single('picture'), (req, res) => {
    var img = fs.readFileSync(req.file.path);
    var encode_image = img.toString('base64');
    // Define a JSONobject for the image attributes for saving to database

    var finalImg = {
        contentType: req.file.mimetype,
        image: new Buffer(encode_image, 'base64')
    };
    db.collection("image").insertOne(finalImg, (err, result) => {
        console.log(result)

        if (err) return console.log(err)

        console.log('saved to database')
        // res.redirect('/')


    })
});

app.get("/photos", (req, res) => {
    db.collection("images").find(toArray((err, result) =>{
        const imgArray = result.map(element => element._id);
        if (err) return console.log(err)
        res.send(imgArray)
    }))
});

app.get('/photo/:id', (req, res) => {
    var filename = req.params.id;
    
    db.collection('image').findOne({'_id': ObjectId(filename) }, (err, result) => {
    
        if (err) return console.log(err)
    
       res.contentType('image/jpeg');
       res.send(result.image.buffer)
      
       
      })
    })
// new_img.img.contentType = 'image/jpeg';  // or 'image/png'
// new_img.save();
// res.json({ message: 'New image added to the db!' });
// app.get(function (req, res) {
//     Image.findOne({}, 'img createdAt', function (err, img) {
//         if (err)
//             res.send(err);
//         res.contentType('json');
//         res.send(img);
//     }).sort({ createdAt: 'desc' });
// });

module.exports = ImageRouter;