const router = require("express").Router();
const improveuController = require("../../controllers/improveuController");

router.route("/")
  .get(improveuController.findAllComments)
  .post(improveuController.createComment);

// router.get('/', (req, res) =>{
//     res.json({message: 'API Started!'});
//   })
  
//   router.route('/comments')
//   .get((req, res) => {
//     Comment.find((err,comments) =>{
//       if (err) res.send(err);
//       res.json(comments);
//     });
//   })
  
  
//   router.route('/comments/:comment_id').put((req,res) =>{
//     Comment.findById(req.params.comment_id,(err, comment)=>{
//       if (err) res.send(err);
//       (req.body.author) ? comment.author = req.body.author : null;
//       (req.body.text) ? comment.text = req.body.text : null;
//       comment.save((err) => {
//         if(err) res.send(err);
//         res.json({message: 'Comment has been updated!'});
//       });
//     });
//   })
//   .delete((req, res) => {
//     Comment.remove({ _id: req.params.comment_id }, (err, comment)=>{
//       if(err) res.send(err);
//       res.json({message: "Comment deleted!"});
//     });
//   });

  module.exports = router;