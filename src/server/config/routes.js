var users = require('../controllers/users');
var contact = require('../controllers/contact');
var express = require('express');
var router = express.Router();


router.post('/login', users.login);
router.post('/register', users.register);

router.post('/contact', contact.save);

module.exports = router;
