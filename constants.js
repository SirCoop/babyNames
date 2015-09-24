/**
 * Created by Sir_Coop on 6/2/2015.
 */

var path = require('path');

module.exports = function(opts) {
    return {

        APPPARENT: __dirname + '/../',
        APPBASE: __dirname,
        PAGESJSON: path.join(__dirname, '/app/_resources/BabyNames.json'),
        // for local
        RESOURCEDATA: path.join(__dirname, '/app/namesByBirthYear'),
        //  for heroku
        //RESOURCEDATA: path.join(__dirname, '/namesByBirthYear'),
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
        //DB_URI: 'mongodb://heroku_kf281tmr:5bgp6hh5vgb0tk03npp12t62e8@ds035583.mongolab.com:35583/heroku_kf281tmr',
        MODEL: {
            BABYNAME: path.join(__dirname, '/dbService/model/BabyName')
        }

    }
};