/**
 * Created by Sir_Coop on 6/17/2015.
 */
var mongoose = require('mongoose');

var babyNameFactory = function () {
    return new BabyNameModel();
};

function BabyNameModel () {

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
    return mongoose.model('BabyName', babyNameSchema);

}

module.exports = babyNameFactory;