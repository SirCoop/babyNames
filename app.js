/**
 * Created by Sir_Coop on 5/27/2015.
 */
'use strict';

//  call express and define an instance
var express = require('express');
var app = express();
//  transforms file paths
var path = require('path');
//  pulls POST information from HTTP req's for modification
var bodyParser = require('body-parser');
//  used to log requests to console
var morgan = require('morgan');
//  object document mapping **Mongo.DB.Collection.Documents <----> JS Objects
var mongoose = require('mongoose');
//  set web server port for this app
var port = process.env.PORT || 1213;

// retrieve app constants
var CONSTANTS = require('./constants.js')();

//  backend service to concatenate contes of baby name files into BabyNames.json
if (CONSTANTS.ENABLE.json_service) {
    //require(path.join(__dirname, '/jsonService/index.js'))();
    require(CONSTANTS.SERVICE.JSON_SERVICE)();
}


//  connect to mongo
//mongoose.connect('mongodb://localhost/babyNames');

// log all requests to console
app.use(morgan('dev'));

// basic route for the home page
//app.get('/', function(req, res){
//    console.log('__dirname is ', __dirname);
//    console.log('process.cwd() is ', process.cwd());
//    //res.sendFile(path.join(__dirname + '/index.html'));
//    //res.sendFile(path.join(__dirname + '/app/index.html'));
//
//
//
//});

//  set the app folder to serve static assets
app.use(express.static(path.join(__dirname, 'app')));
console.log('path ', path.join(__dirname, 'app'));

//  set up the one route to the index.html file
//app.get('*', function (req, res) {
//   res.sendFile(path.join(__dirname, 'app/index.html'));
//});

//  use body parser to grab POST req body info
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//  start server
// process.env.PORT || 4711 just in case port environment variable is set on deployment e.g.Heroku
var port =  process.env.PORT || 1213;
// start server
app.listen(port, function(){
    console.log('Express server listening on port %d in %s mode', port, app.settings.env);
});

//  let's create another instance of an express router to handle api routing
var api = express.Router();

//   define api routes
api.get('/', function (req, res) {
    res.send("/api is the route");
});

api.get('/coop', function (req, res) {
   res.send('/coop is the route. $4.2MM by 4July2018');
});

//  mount our api router onto the original express app router at path /api
app.use('/api', api);


