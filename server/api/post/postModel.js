var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PostSchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true
  },

  text: {
    type: String,
    required: true
  },
  // reference to the user who created this post
  author: 
  {
    type: Schema.Types.ObjectId,
    ref: 'user',
    required:true
  },
  categories:[{
    type: Schema.Types.ObjectId,
    ref: 'category',
    required: true
  }]

});

PostSchema.pre("save", function(next){
    next();
});


PostSchema.pre("init", function(next){
        next();
});

PostSchema.pre("remove", function(next){
        next();
});


PostSchema.pre("find", function(result){
	console.log(JSON.stringify(result));
});

module.exports = mongoose.model('Post', PostSchema);
