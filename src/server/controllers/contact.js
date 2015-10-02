var mongoose = require('mongoose');
var Contact = mongoose.model('Contact');


exports.save = function (req, res, next) {
    if(!req.body.username || !req.body.email || !req.body.message){
      return res.status(400).json({message: 'Please fill out all fields'});
    }

    var contact = new Contact();

    contact.username = req.body.username;

    contact.email = req.body.email;

    contact.message = req.body.message;

    contact.save(function (err){
      if(err){ return next(err); }

      return res.status(200).json({message: 'Your message has sent'});
    });
};
