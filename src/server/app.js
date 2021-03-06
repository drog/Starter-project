/*jshint node:true*/
'use strict';

var express = require('express');
var app = express();
var fs = require('fs');
var join = require('path').join;
var compression = require('compression');
var bodyParser = require('body-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
var passport = require('passport');

var secrets = require('./config/secrets');
mongoose.connect(secrets.db);

// Bootstrap models
fs.readdirSync(join(__dirname, './models')).forEach(function (file) {
  if (file.indexOf('.js')){
    require(join(__dirname, './models', file));
  }
});

require('./config/passport');

var routes = require('./config/routes');

var port = process.env.PORT || 8001;
var four0four = require('./utils/404')();

var environment = process.env.NODE_ENV;

// Compression middleware (should be placed before express.static)
app.use(compression({
    threshold: 512
}));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


app.use(passport.initialize());
app.use('/api', routes);

console.log('About to crank up node');
console.log('PORT=' + port);
console.log('NODE_ENV=' + environment);

switch (environment){
    case 'build':
        console.log('** BUILD **');
        app.use(express.static('./build/'));
        // Any invalid calls for templateUrls are under app/* and should return 404
        app.use('/app/*', function(req, res, next) {
            four0four.send404(req, res);
        });
        // Any deep link calls should return index.html
        app.use('/*', express.static('./build/index.html'));
        break;
    default:
        console.log('** DEV **');

        app.use(logger('dev'));

        app.use(express.static('./src/client/'));
        app.use(express.static('./'));
        app.use(express.static('./tmp'));
        // Any invalid calls for templateUrls are under app/* and should return 404
        app.use('/app/*', function(req, res, next) {
            four0four.send404(req, res);
        });
        // Any deep link calls should return index.html
        app.use('/*', express.static('./src/client/index.html'));
        break;
}

app.listen(port, function() {
    console.log('Express server listening on port ' + port);
    console.log('env = ' + app.get('env') +
        '\n__dirname = ' + __dirname  +
        '\nprocess.cwd = ' + process.cwd());
});
