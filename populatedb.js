// Used to populate the databases with test data

console.log('This creates instances of celebs, celebinstances, and careers in the database')

// Pass arguments on the command line
var userArgs = process.argv.slice(2);
/*
if (!userArgs[0].startsWith('mongodb')) {
    console.log('ERROR: You need to specify a valid mongodb URL as the first argument');
    return
}
*/
var async = require('async')
var Career = require('./models/career')
var Celeb = require('./models/celeb')
var CelebInstance = require('./models/celebinstance')

var mongoose = require('mongoose');
var mongoDB = userArgs[0];
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

var celebs = []
var careers = []
var celebinstances = []