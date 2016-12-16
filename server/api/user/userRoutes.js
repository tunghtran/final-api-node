var router = require('express').Router();
var mongoose = require('mongoose');
var User = mongoose.model('User');
// setup boilerplate route jsut to satisfy a request
// for building

//route() will allow you to use same path for different HTTP operation.
//So if you have same URL but with different HTTP OP such as POST,GET etc
//Then use route() to remove redundant code.
router.route('/')
  .get(function(req, res){
    User.find({}, function(err, users){
      if(err) throw err;
      console.log(users);
    });
    res.send({ok: true});
  });

router.route('/')
  .post(function(req, res){
    if(!req.body.username || !req.body.address){
        res.json({success: false, msg: 'Please add username and address'});
    }
    else{
    	var newUser = new User({
            username: req.body.username,
	    address: req.body.address
	});

	newUser.save(function(err){
	    if (err) {
    		return res.json({success: false, msg: 'Username already exists.'});
  	    }
      	    res.json({success: true, msg: 'Successful created new user.'});
	})
    }
  });

module.exports = router;
