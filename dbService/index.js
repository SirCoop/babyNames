/**
 * Created by Sir_Coop on 6/17/2015.
 */
var CONSTANTS = require('../constants')();
var dataSet = require(CONSTANTS.PAGESJSON);
var Q = require('q');
//var babyNameSchema = require('./ModelFactory');
var mongoose = require('mongoose');
var db;

//  mongoose model constructor
var BabyName = require('./model/BabyName');

//  return db migration constructor
var babyNameDbDump = function () {
    return new dbDump();
};

function dbInsert (data, Model) {
    console.log('dbInsert() called');

    data.slice(-4, -1).forEach(function (obj, index, array) {
        //console.log('obj ', obj);
        //console.log('dataArr length ', array.length);
        obj.names.forEach(function (nameObj, index, array) {
            //console.log('nameDataArr length ', array.length);
            var BabyName = new Model(nameObj);
            //console.log('babyName model constructed ', BabyName);
            BabyName.save(function (err, BabyName) {
                if(err) {
                    console.log('error on BabyName.save() ', err);
                }
                console.log('saved');
                console.log('BabyName model saved ', BabyName);
            });

        });
        console.log('index ', index);
        if (index === array.length - 1) {
            console.log('db closed');
            db.close();
        }
    });
}

function dbDump () {
    if (mongoose.connection.readyState > 0) {
        console.log('mongoose ready, in state: ', mongoose.connection.readyState);
        db = mongoose.connection;
        db.on('error', console.error.bind(console, 'DATASERVICE mongo connection error: '));
        db.once('open', function (callback) {
            console.log('db opened from DATASERVICE:', db.name);
            console.log('mongoose ready, in state: ', mongoose.connection.readyState);
            dbInsert(dataSet, BabyName);
        });
    }
    else {
        mongoose.connect(CONSTANTS.DB_URI);
        db = mongoose.connection;
        db.on('error', console.error.bind(console, 'DATASERVICE mongo connection error: '));
        db.once('open', function (callback) {
            console.log('db opened from DATASERVICE', db.name);
            console.log('mongoose ready, in state: ', mongoose.connection.readyState);
            dbInsert(dataSet, BabyName);
        });
    }
}

module.exports = babyNameDbDump;




//  ***SO Solution to connect to Mongo DB***
/*
 var mongoose = require('mongoose');

 var Db = require('mongodb').Db,
 Server = require('mongodb').Server;

 console.log(">> Connecting to mongodb on 127.0.0.1:27017");

 var db = new Db('test', new Server("127.0.0.1", 27017, {}));

 db.open(function(err, db) {
 console.log(">> Opening collection test");
 try {
 db.collection('test', function(err, collection) {
 console.log("dropped: ");
 console.dir(collection);
 });
 }
 catch (err) {
 if (!db) {
 throw('MongoDB server connection error!');
 }
 else {
 throw err;
 }
 }
 });

 process.on('uncaughtException', function(err) {
 console.log(err);
 });
 */

