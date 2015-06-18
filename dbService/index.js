/**
 * Created by Sir_Coop on 6/17/2015.
 */
var CONSTANTS = require('../constants')();
var dataSet = require(CONSTANTS.PAGESJSON);
var Q = require('q');


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

        //  define model schema
        var Schema = mongoose.Schema;
        var babyNameSchema = new Schema({
            gender: String,
            name: String,
            quantity: Number,
            year: Number,
        });

        //  compile BabyName to model using the babyNameSchema as the structure
        //  Mongoose also creates a MongoDB collection called 'BabyNames' for these documents
        //  BabyName is capitalized because the result of a compiled model is a constructor function
        var BabyName = mongoose.model('BabyName', babyNameSchema);

        //console.log('db opened ', db.name);

        dbInsert(dataSet, BabyName);
    });

    mongoose.connect(CONSTANTS.DB_URI);


    //console.log('dataSet ', dataSet[0].names[0]);

}

module.exports = babyNameDbDump;

