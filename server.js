// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
var passport = require('passport');

require('./server/app-api/models/db');
require('./server/app-api/config/passport');

var routesApi = require('./server/app-api/routes/index');

var app = express();
// Get routes
const documents = require('./server/routes/documents');
const insert = require('./server/routes/insert');
const find = require('./server/routes/find');


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

/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '3000';
app.set('port', port);

module.exports = app;

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`API running on localhost:${port}`));
