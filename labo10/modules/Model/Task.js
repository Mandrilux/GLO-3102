var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TaskSchema = new Schema({
   userId: String,
   name: String
});
module.exports =  mongoose.model('Task', TaskSchema)
