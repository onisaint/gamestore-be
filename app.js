'use strict';

var express = require('express');

//env setup and app
var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';
var app = express();
//configurations
var config = require('./server/config/config')[env];

//->express
require('./server/config/express')(app, config);

//->mongoose
require('./server/config/mongoose')(config);

//->routes
require('./server/routes/routes')(app);

//->listener
require('./server/config/listen')(app, config);