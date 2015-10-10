var mongoose = require('mongoose');

var ContactSchema = new mongoose.Schema({
    username: String,
    email: String,
    message: String,
    createdAt: {
        type: Date,
        default: Date.now
    }
});



mongoose.model('Contact', ContactSchema);
