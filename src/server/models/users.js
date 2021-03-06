var mongoose = require('mongoose');
var crypto = require('crypto');
var jwt = require('jsonwebtoken');
var secrets = require('../config/secrets');

var UserSchema = new mongoose.Schema({
    username: {
        type: String,
        lowercase: true,
        unique: true
    },
    email: {
        type: String,
        lowercase: true,
        unique: true
    },
    password: {
        type: String
    },
    salt: {
        type: String,
    },
    roles: {
        type: [{
            type: String,
            enum: ['user', 'admin']
        }],
        default: ['user']
    },

    gender: {
        type: String,
        default: ''
    },
    location: {
        type: String,
        default: ''
    },
    picture: {
        type: String,
        default: ''
    },
    updatedAt: {
        type: Date
    },
    createdAt: {
        type: Date,
        default: Date.now
    }

});


UserSchema.methods.setPassword = function(password) {
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
        email: this.email,
        roles: this.roles,
        exp: parseInt(exp.getTime() / 1000),
    }, secrets.sessionSecret);
};


mongoose.model('User', UserSchema);
