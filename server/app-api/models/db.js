///////////////////////////////////////////////////////////////////////
// var mongoose = require('mongoose');
// var gracefulShutdown;
// var dbURI = 'mongodb://localhost:27017/clinical';
//
// mongoose.connect(dbURI);
//
// mongoose.connection.on('connected', function() {
//   console.log('Mongoose connected to ' + dbURI);
// });
//
// // BRING IN YOUR SCHEMAS & MODELS
// require('./user');
/////////////////////////////////////////////////////////////////////


var mongoose = require( 'mongoose' );
//var assert = require('assert');

// var dbURI = 'mongodb://localhost:27017/clinical';
// if (process.env.NODE_ENV === 'production') {
//   dbURI = 'mongodb://clinicalTrial2017:clinicalTrial2017!@ds231715.mlab.com:31715/heroku_vrprv3qd';
// }
var dbURI = 'mongodb://clinicalTrial2017:clinicalTrial2017!@ds231715.mlab.com:31715/heroku_vrprv3qd';

var promise = mongoose.connect( dbURI, {
  useMongoClient: true
  /* other options */
});

mongoose.connection.on( 'connected', function() {
  console.log( 'Mongoose Connected to ' + dbURI );
});

mongoose.connection.on( 'error', function( err ) {
  console.log( 'Mongoose Connection Error ' + err );
});

mongoose.connection.on( 'disconnected', function() {
  console.log( 'Mongoose Disconnected' );
});

var gracefulShutdown = function( msg, callback ) {
  mongoose.connection.close( function() {
    console.log( 'Mongoose disconnected through ' + msg );
    callback();
  });
};

process.once( 'SIGUSR2', function () {
  gracefulShutdown( 'nodemon restart', function() {
    process.kill( process.pid, 'SIGUSR2' );
  });
});

process.on( 'SIGINT', function () {
  gracefulShutdown( 'app termination', function() {
    process.exit(0);
  });
});

process.on( 'SIGTERM', function () {
  gracefulShutdown( 'Heroku app termination', function() {
    process.exit(0);
  });
});

//mongoose.connect(dbURI);

require('./user');
