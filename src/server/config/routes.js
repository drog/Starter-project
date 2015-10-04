var users = require('../controllers/users');
var contact = require('../controllers/contact');
var express = require('express');
var router = express.Router();

var jwt = require('express-jwt');
var secrets = require('../config/secrets');
var auth = jwt({secret: secrets.sessionSecret, userProperty: 'payload'});

router.post('/login', users.login);
router.post('/register', users.register);
router.get('/me', auth, users.getProfile);
router.put('/update_profile', auth, users.updateProfile);
router.put('/change_password', auth, users.changePassword);

router.get('/users', auth, users.getUsers);



router.post('/contact', contact.save);

module.exports = router;
