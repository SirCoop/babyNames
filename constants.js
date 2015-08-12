/**
 * Created by Sir_Coop on 6/2/2015.
 */

var path = require('path');

module.exports = function(opts) {
    return {

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
            db_service: 0,
            api: 1
        },
        DB_URI: 'mongodb://localhost/babyNames',

        MODEL: {
            BABYNAME: path.join(__dirname, '/dbService/model/BabyName')
        }

    }
};