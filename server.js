// Get dependencies
const express = require('express');
const path = require('path');
//const http = require('http');
var hbs = require( 'express-handlebars' );
const bodyParser = require('body-parser');
var passport = require('passport');

require('./server/app-api/models/db');
require('./server/app-api/config/passport');

var routesApi = require('./server/app-api/routes/index');

var app = express();

// view engine setup
// view engine setup
app.engine('hbs', hbs({
  extname: 'hbs',
  defaultLayout: 'layout',
  layoutsDir: __dirname + '/app_server/views/',
  helpers: require("./app_server/controllers/_includes/sharedHTMLfunctions.js").helpers
}));
app.set('views', path.join(__dirname, 'app_server', 'views'));
app.set('view engine', 'hbs');

// Get routes
var documents = require('./server/routes/documents');
var insert = require('./server/routes/insert');
var find = require('./server/routes/find');


// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(passport.initialize());
app.use('/api', routesApi);

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));


// Set routes
app.use('/documents', documents);
app.use('/find', find);
app.use('/insert', insert);

// Catch all other routes and return the index file

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

/**
 * Get port from environment and store in Express.
 */
//const port = process.env.PORT || '3000';
//app.set('port', port);

module.exports = app;

/**
 * Create HTTP server.
 */
//const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
//server.listen(port, () => console.log(`API running on localhost:${port}`));
