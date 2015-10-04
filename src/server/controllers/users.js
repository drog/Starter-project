var mongoose = require('mongoose');
var passport = require('passport');
var jwt = require('express-jwt');

var User = mongoose.model('User');

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

exports.getProfile = function (req, res, next) {
  User.findById(req.payload._id, function(err, users){
    if(err){ return next(err); }

    return res.json(users);
  });

};

exports.updateProfile = function (req, res, next) {
  User.findById(req.payload._id, function(err, user) {
  if(err){ return next(err); }

  //user.username = req.body.username;
  //user.email = req.body.email;
  user.gender = req.body.gender;
  user.location = req.body.location;

  // save the user
  user.save(function(err) {
    if (err){ return next(err); }

    return res.status(200).json({type: 'success', message: 'User successfully updated!'});
  });

});

};

exports.changePassword = function (req, res, next) {
  User.findById(req.payload._id, function(err, user){
    if(err){ return next(err); }

    if (user.validPassword(req.body.password)) {

        user.setPassword(req.body.new_password);

        user.save(function(err) {
          if (err){ return next(err); }

          return res.status(200).json({type: 'success', message: 'password successfully updated!'});
        });

    }else{
      return res.status(200).json({type: 'error', message: 'Incorrect Password'});
    }

  });
};

exports.getUsers = function (req, res, next) {
  User.find({}, function(err, users){
    if(err){ return next(err); }

    return res.json(users);
  }).select('username  email gender location');

};




