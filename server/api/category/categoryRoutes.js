var router = require('express').Router();
var mongoose = require('mongoose');
var Category = mongoose.model('Category');

// setup boilerplate route just to satisfy a request
// for building

router.route('/')
  .get(function(req, res){
    Category.find({}, function(err, categories){
      if(err) throw err;
      console.log(categories);
    });
    res.send({ok: true});
  });

router.route('/')
  .post(function(req, res){
    if(!req.body.name){
        res.json({success: false, msg: 'Please add category name'});
    }
    else{
        var newCategory = new Category({
            name: req.body.name
        });

        newCategory.save(function(err){
            if (err) {
                return res.json({success: false, msg: 'Category already exists.'});
            }
            res.json({success: true, msg: 'Successful created new category.'});
        })
    }
  });


module.exports = router;

