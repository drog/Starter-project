var mongoose = require('mongoose');

var ContactSchema = new mongoose.Schema({
  username: String,
  email: String,
  message: String
});



mongoose.model('Contact', ContactSchema);
