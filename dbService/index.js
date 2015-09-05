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






        //console.log('length of data: ', len);
        //console.log('typeof Data[' + 0 + ']: ', data[0].names);
        //data[0].names.forEach(function (nameObj, index, array) {
        //    //console.log('nameObject ', nameObj);
        //    var babyName = new Model(nameObj);
        //    //console.log('babyName model constructed ', BabyName);
        //    babyName.save(function (err, babyName) {
        //        if(err) {
        //            console.log('error on BabyName.save() ', err);
        //        }
        //        console.log('saved');
        //        console.log('BabyName model saved ', babyName);
        //    });
        //
        //});
        //console.log('babyname create: ', BabyName.create(data[0].names));
        ////data.splice(index, 1);
        //console.log('index ', i);



    }
    //data.slice(-4, -1).forEach(function (obj, index, array) {

        //console.log('obj ', obj);
        //console.log('dataArr length ', array.length);
        //obj.names.forEach(function (nameObj, index, array) {
        //    //console.log('nameDataArr length ', array.length);
        //    var BabyName = new Model(nameObj);
        //    //console.log('babyName model constructed ', BabyName);
        //    BabyName.save(function (err, BabyName) {
        //        if(err) {
        //            console.log('error on BabyName.save() ', err);
        //        }
        //        console.log('saved');
        //        console.log('BabyName model saved ', BabyName);
        //    });
        //
        //});
        ////data.splice(index, 1);
        //console.log('index ', index);
        //if (index === array.length - 1) {
        //    console.log('db closed');
        //    //db.close();
        //}
    //});
}

//dbInsert(dataSet, BabyName);

//function dbDump () {
//    if (mongoose.connection.readyState > 0) {
//        console.log('mongoose ready, in state: ', mongoose.connection.readyState);
//        db = mongoose.connection;
//        db.on('error', console.error.bind(console, 'DATASERVICE mongo connection error: '));
//        db.once('open', function (callback) {
//            console.log('db opened from DATASERVICE:', db.name);
//            console.log('mongoose ready, in state: ', mongoose.connection.readyState);
//            dbInsert(dataSet, BabyName);
//        });
//    }
//    else {
//        mongoose.connect(CONSTANTS.DB_URI);
//        db = mongoose.connection;
//        db.on('error', console.error.bind(console, 'DATASERVICE mongo connection error: '));
//        db.once('open', function (callback) {
//            console.log('db opened from DATASERVICE', db.name);
//            console.log('mongoose ready, in state: ', mongoose.connection.readyState);
//            dbInsert(dataSet, BabyName);
//        });
//    }
//}

module.exports = babyNameDbDump;


