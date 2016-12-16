var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: true
  },
  address:{
    type: String,
    required: true
  }
});

UserSchema.pre("save", function(next){
    next();
});

UserSchema.pre("init", function(next){
        next();
});

UserSchema.pre("remove", function(next){
        next();
});

UserSchema.pre("find", function(result){
        console.log(JSON.stringify(result));
});


var User = mongoose.model('User', UserSchema);
module.exports = User;
