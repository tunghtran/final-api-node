var router = require('express').Router();

// api router will mount other routers
// for all our resources
router.get("/",function(req,res){
    res.json({"error" : false,"message" : "Hello World"});
});
router.use('/users', require('./user/userRoutes'));
 
module.exports = router;
