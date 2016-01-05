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
    //return new dbDump();
    dbInsert(dataSet, BabyName);
};

function dbInsert (data, Model) {
    console.log('dbInsert() called');
    var total = 0;
    for (var i = 0, len = data.length; i < len; i++) {
        total += data[i].names.length;
        console.log('i BEFORE success callback: ', i);
        (function (loopVar, nameData, Model, totalCount) {

            Model.collection.insert(data[loopVar].names, onInsert);
            function onInsert (err, docs) {
                if (err) {
                    console.log('insert error: ', err);
                } else {
                    console.log('i INSIDE success callback: ', loopVar);
                    console.log(data[loopVar].names.length + ' documents were successfully stored');
                    console.log('Total Babynames stored: ', totalCount);
                }
            }
        })(i, data, BabyName, total)

    }
}

module.exports = babyNameDbDump;




