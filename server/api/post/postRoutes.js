var router = require('express').Router();
var mongoose = require('mongoose');
var Post = mongoose.model('Post');
// setup boilerplate route jsut to satisfy a request
// for building
router.route('/')
  .get(function(req, res){
    //console.log('Hey from post!!');
    Post.find({}, function(err, posts){
      if(err) throw err;
      console.log(posts);
    });
    res.send({ok: true});
  });

router.route('/')
  .post(function(req, res){
    if(!req.body.title || !req.body.text || !req.body.author){
        res.json({success: false, msg: 'Please add title, author and text'});
    }
    else{
        var newPost = new Post({
            title: req.body.title,
            text: req.body.text,
	    author: req.body.author
        });

        newPost.save(function(err){
            if (err) {
                return res.json({success: false, msg: 'Invalid inputs'});
            }
            res.json({success: true, msg: 'Successful created new post.'});
        })
    }
  });


module.exports = router;
