/**
 * Created by Sir_Coop on 5/27/2015.
 */
'use strict';

// retrieve app constants
var CONSTANTS = require('./constants')();
//  call express and define an instance
var express = require('express');
var app = express();
//  transforms file paths
var path = require('path');
//  pulls POST information from HTTP req's for modification
var bodyParser = require('body-parser');
//  used to log requests to console
var morgan = require('morgan');
//  set web server port for this app
var port = process.env.PORT || 1213;
//  object data modeling: mongoDb <---> JS objects
var mongoose = require('mongoose');
//  mongoose model - this gives me all the schema enforced CRUD operations for a BabyName model
var BabyName = require(CONSTANTS.MODEL.BABYNAME);
//  mongooose connection
var db;


//  backend service to concatenate baby name files into BabyNames.json
if (CONSTANTS.ENABLE.json_service) {
    //require(path.join(__dirname, '/jsonService/index.js'))();
    require(CONSTANTS.SERVICE.JSON_SERVICE)();
}

//  backend service to construct db model from schema, read BabyNames.json and write each obj to db
//  if enabled, set ENABLE.api = 0 & vice versa
if (CONSTANTS.ENABLE.db_service && !turnOffDbService) {
    require(CONSTANTS.SERVICE.DB_SERVICE)();
    startApp();
}

//  ****Open DB Connection - FOR LOCALHOST USE ONLY****
if (CONSTANTS.ENABLE.api) {
    mongoose.connect(CONSTANTS.DB_URI);
    db = mongoose.connection;
    db.on('error', console.error.bind(console, 'app.js mongo connection error: '));
    db.once('open', function (callback) {
        console.log('db opened from app.js:', db.name);
        console.log('app.js mongoose ready, in state: ', mongoose.connection.readyState);
        startApp();
    });
}

//  for heroku, disable CONSTANTS.ENABLE.api and just run startApp()
//startApp();

//  ****Server Stuff****
function startApp() {

// log all requests to console
    app.use(morgan('dev'));

//  set the app folder to serve static assets
    app.use(express.static(path.join(__dirname, 'app')));
    console.log('path ', path.join(__dirname, 'app'));

//  use body parser to grab POST req body info
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());

//  start server
// process.env.PORT || 4711 just in case port environment variable is set on deployment e.g.Heroku
    var port = process.env.PORT || 1213;
// start server
    app.listen(port, function () {
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

    app.get('/api/names/all', function (req, res) {
        console.log('retrieving all names');
        BabyName.find({}, function (err, result) {
            if (err) console.log('BabyName fetch error: ', err);
            //console.log('typeof res ', typeof result);
            //console.log('result ', result);
            res.send(result);
        });
    });

    app.get('/api/names/all/:letter', function (req, res) {
        console.log('retrieving names by letter ', req.params.letter);
        var letter = req.params.letter;
        var pattern = '^' + letter;
        var regex = new RegExp(pattern);

        BabyName.find({ name: { $regex: regex, $options: '' } }, function(err, result) {
            //console.log('here is the name data by letter: ', result);
            if (err) console.log('BabyName fetch error: ', err);
            //res.jsonp(item);
            res.send(result);
        });

    });



}


