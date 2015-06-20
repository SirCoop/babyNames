/**
 * Created by Sir_Coop on 6/2/2015.
 */

var path = require('path');

module.exports = function(opts) {
    return {

        //DB_URI: 'mongodb://localhost/ebgi_gallery',

        //UPLOADBASE: __dirname + '/backend/upload/',

        //PORT: {
        //    DATASERVICE: 9000,
        //    ANEB: 9999,
        //    CMS: 10001,
        //    GALLERY: 9888,
        //    FILESERVICE: 12121,
        //    AUTHSERVICE: 9777,
        //    GATEWAY: 80
        //},

        //MODULE_REQUIRE: {
        //    BACKEND: __dirname + '/backend',
        //
        //    TEST: {
        //        BACKEND: __dirname + '/test/backend',
        //        ANEB: __dirname + '/test/aneb',
        //        CMS: __dirname + 'test/cms'
        //    }
        //},

        APPPARENT: __dirname + '/../',
        APPBASE: __dirname,
        PAGESJSON: path.join(__dirname, '/app/_resources/BabyNames.json'),
        RESOURCEDATA: path.join(__dirname, '/app/namesByBirthYear'),
        SERVICE: {
            JSON_SERVICE: path.join(__dirname, '/jsonService/index'),
            DB_SERVICE: path.join(__dirname, '/dbService/index')
        },

        ENABLE: {
            json_service: 0,
            db_service: 1,
            api: 0
        },
        DB_URI: 'mongodb://localhost/babyNames',
        //DB_SERVICE: path.join(__dirname, '/app/dbService')

        //DATASERVICE: {
        //    DSBASE: __dirname + '/backend/service/DataService/_dsBase',
        //    DSARTIST: __dirname + '/backend/service/DataService/dsArtist',
        //},

        MODEL: {
            BABYNAME: path.join(__dirname, '/dbService/model/BabyName')
        }

    }
};