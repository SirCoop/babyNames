///**
// * Created by Sir_Coop on 6/2/2015.
// */
//'use strict';
//
//var fs = require('graceful-fs')
//var CONSTANTS = require('../constants.js')();
//
//var JSONFactory = function(opts) {
//    return new MakeJSON(opts)
//};
//
//function MakeJSON(opts) {
//        //  generate array to be written to json output file
//        var final = [];
//        var newLineRegex = /[^\r\n]+/g;
//        var pushToArr = function (item) {
//            final.push(item);
//        };
//        var dataLocation = CONSTANTS.RESOURCEDATA;
//        console.log('datalocation ', dataLocation);
//        var dataModel = '';
//        //  array of filenames to be executed synchronously
//        var fileNames = fs.readdirSync(dataLocation);
//        //  read contents of each file and push to array as string
//        fileNames.forEach(function (file) {
//            var babyNames = {
//                year: file.substring(3,7),
//                //  .match(regex) splits the returned string into constituent name strings
//                names: fs.readFileSync(dataLocation + '\\' + file).toString().match(newLineRegex)
//            };
//            pushToArr(babyNames);
//        });
//        //  write output file
//        fs.writeFileSync(CONSTANTS.PAGESJSON, JSON.stringify(final));
//}
//
//module.exports = JSONFactory;

/**
 * Created by Sir_Coop on 6/9/2015.
 */
'use strict';

var fs = require('graceful-fs')
var CONSTANTS = require('../constants')();
var path = require('path');

var JSONFactory = function(opts) {
    return new MakeJSON(opts)
};

function MakeJSON(opts) {
    //  generate array to be written to json output file
    var final = [];
    var newLineRegex = /[^\r\n]+/g;
    var pushToArr = function (item) {
        final.push(item);
    };

    //  local
    //var dataLocation = CONSTANTS.RESOURCEDATA;
    //  Heroku
    var dataLocation = path.join(__dirname, '../namesByBirthYear');
    var dataModel = '';
    var fileNames;
    //  array of filenames to be synchronously executed upon
    console.log('DATA LOCATION: ', dataLocation);
    var dir = fs.lstatSync(dataLocation);
    console.log('is directory? ', dir.isDirectory());
    try {
        fileNames = fs.readdirSync(dataLocation);
    } catch (e) {
        console.log('error on fs.readdirSync: ', e);
    }

    //  single file execution
    fileNames.forEach(function (file) {
        var nameObjArr = [];
        var x;
        //  read file contents, then split on newLineRegex
        try {
            x = fs.readFileSync(dataLocation + '\\' + file).toString().match(newLineRegex);
        } catch (e) {
            console.log('error on fs.readFileSync: ', e);
        }

        //  set up final babyName obj to be written
        var babyNames = {
            //  .match(regex) splits the returned string into constituent name strings
            names: []
        };
        //  for each name object,x, split on ',' and return new babyNames obj containing individualized names array
        x.forEach(function (nameObj) {
            var contentsArr = nameObj.split(',');
            babyNames.names.push({
                year: parseInt(file.substring(3,7)),
                name: contentsArr[0],
                gender: contentsArr[1],
                quantity: parseInt(contentsArr[2])
            });
        });
        pushToArr(babyNames);
    });
    //  write output file
    fs.writeFileSync(CONSTANTS.PAGESJSON, JSON.stringify(final));
}

module.exports = JSONFactory;