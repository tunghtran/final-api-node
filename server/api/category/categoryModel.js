var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CategorySchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  }
});

CategorySchema.pre("save", function(next){
	next();
});

CategorySchema.pre("init", function(next){
	next();
});

CategorySchema.pre("remove", function(next){
	next();
});

CategorySchema.pre("find", function(result){
        console.log(JSON.stringify(result));
});

CategorySchema.pre('update', function(value) {
  this.update({},{ $set: { text = value} });
});


module.exports = mongoose.model('Category', CategorySchema);

