var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  roles: String
});

module.exports =  mongoose.model('User', UserSchema)
