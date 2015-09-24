/*
 * Created by Sir_Coop on 6/17/2015.
 */


//  compile BabyName to model using the babyNameSchema as the structure
//  Mongoose also creates a MongoDB collection called 'BabyNames' for these documents
//  BabyName is capitalized because the result of a compiled model is a constructor function
//    return mongoose.model('BabyName', babyNameSchema);

//module.exports = babyNameModel;

var ModelFactory = require('../ModelFactory');

var BabyName = ModelFactory('BabyName', {
    gender: String,
    name: String,
    quantity: Number,
    year: Number,
});

module.exports = BabyName;