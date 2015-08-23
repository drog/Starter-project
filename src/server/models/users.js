var mongoose = require('mongoose');
var crypto = require('crypto');
var jwt = require('jsonwebtoken');
var secrets = require('../config/secrets');

var UserSchema = new mongoose.Schema({
  username: {type: String, lowercase: true, unique: true},
  email: {type: String, lowercase: true, unique: true},
  password: String,
  salt: String,

  facebook: String,
  twitter: String,
  google: String,

  profile: {
    name: { type: String, default: '' },
    gender: { type: String, default: '' },
    location: { type: String, default: '' },
    picture: { type: String, default: '' }
  },

  resetPasswordToken: String,
  resetPasswordExpires: Date

});


UserSchema.methods.setPassword = function(password){
  this.salt = crypto.randomBytes(16).toString('hex');

  this.password = crypto.pbkdf2Sync(password, this.salt, 1000, 64).toString('hex');
};

UserSchema.methods.validPassword = function(password) {
  var password = crypto.pbkdf2Sync(password, this.salt, 1000, 64).toString('hex');

  return this.password === password;
};

UserSchema.methods.generateJWT = function() {

  // set expiration to 60 days
  var today = new Date();
  var exp = new Date(today);
  exp.setDate(today.getDate() + 60);

  return jwt.sign({
    _id: this._id,
    username: this.username,
    exp: parseInt(exp.getTime() / 1000),
  }, secrets.sessionSecret);
};


mongoose.model('User', UserSchema)
