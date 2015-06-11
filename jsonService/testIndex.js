/**
 * Created by Sir_Coop on 6/9/2015.
 */
'use strict';

var fs = require('graceful-fs')
var CONSTANTS = require('../constants.js')();

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
    var dataLocation = CONSTANTS.RESOURCEDATA;
    console.log('datalocation ', dataLocation);
    var dataModel = '';
    //  array of filenames to be executed synchronously
    var fileNames = fs.readdirSync(dataLocation);
    //  read contents of each file and push to array as string
    fileNames.forEach(function (file) {
        var nameObjArr = [];
        //  read file contents, then split on newLineRegex, then for each name object split on ',' and return new obj
        var x = fs.readFileSync(dataLocation + '\\' + file).toString().match(newLineRegex);
        //  logs ['name,m/f,quantity', ...]
        //console.log('x ', x);
        //  logs 'name'
        //  logs 'gender'
        //  logs 'quantity'

        var babyNames = {
            year: file.substring(3,7),
            //  .match(regex) splits the returned string into constituent name strings
            names: []
        };

        x.forEach(function (nameObj) {
            var contentsArr = nameObj.split(',');
            //console.log('contentsArr[0] ', contentsArr[0]);
            //console.log('contentsArr[1] ', contentsArr[1]);
            //console.log('contentsArr[2] ', contentsArr[2]);
            babyNames.names.push({
                name: contentsArr[0],
                gender: contentsArr[1],
                quantity: contentsArr[2]
            });
        });

        pushToArr(babyNames);
    });
    //  write output file
    fs.writeFileSync(CONSTANTS.PAGESJSON, JSON.stringify(final));
}

module.exports = JSONFactory;