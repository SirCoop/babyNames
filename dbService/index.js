/**
 * Created by Sir_Coop on 6/17/2015.
 */
var CONSTANTS = require('../constants')();
var dataSet = require(CONSTANTS.PAGESJSON);
var Q = require('q');
var babyNameSchema = require('./model/BabyName');


var babyNameDbDump = function () {
    return new dbDump();
};

function dbInsert (data, Model) {
    data.forEach(function (obj) {
        var babyName = new Model(obj);
        babyName.save(function (err, babyName) {
            if(err) {
                console.log('error on babyName.save() ', err);
            }
            console.log('babyName model saved ', babyName);
        });

    });
}

function dbDump () {
    //  object document mapping **Mongo.DB.Collection.Documents <----> JS Objects
    var mongoose = require('mongoose');
    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'mongo connection error: '));
    db.once('open', function (callback) {

        //  create models and schema here
        //console.log('babyNameSchema ', babyNameSchema());
        var babyNamesModel = babyNameSchema();

        console.log('db opened ', db.name);

        dbInsert(dataSet, babyNamesModel);
        module.exports = babyNamesModel;
    });

    mongoose.connect(CONSTANTS.DB_URI);


    //console.log('dataSet ', dataSet[0].names[0]);

}

module.exports = babyNameDbDump;

