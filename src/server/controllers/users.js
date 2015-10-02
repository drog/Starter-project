var mongoose = require('mongoose');
var passport = require('passport');
var jwt = require('express-jwt');

var User = mongoose.model('User');
var secrets = require('../config/secrets');


var auth = jwt({secret: secrets.sessionSecret, userProperty: 'payload'});

exports.register = function (req, res, next) {
    if(!req.body.username || !req.body.email || !req.body.password){
      return res.status(400).json({message: 'Please fill out all fields'});
    }



    var user = new User();

    user.username = req.body.username;

    user.email = req.body.email;

    user.setPassword(req.body.password);

    user.save(function (err){
      if(err){ return next(err); }

      return res.json({token: user.generateJWT()});
    });
};


exports.login = function (req, res, next) {
    if(!req.body.username || !req.body.password){
      return res.status(400).json({message: 'Please fill out all fields'});
    }

    passport.authenticate('login-local', function(err, user, info){
      if(err){ return next(err); }

      if(user){
        return res.json({token: user.generateJWT()});
      } else {
        return res.status(401).json(info);
      }
    })(req, res, next);
};