/**
 * Created by Sir_Coop on 6/17/2015.
 */
/*
+-------------------+
|   BABYNAME        |
|-------------------+
| gender: String    |
| name: String      |
| quantity: Number  |
| year: Number      |
+-------------------+
 */

var mongoose = require('mongoose');
//var CONSTANTS = require('../constants')();

//  builds the mongoose model constructor
var ModelFactory = function (name, schema) {
    var schm = new mongoose.Schema(schema);
    return  mongoose.model(name, schm);
};

module.exports = ModelFactory;