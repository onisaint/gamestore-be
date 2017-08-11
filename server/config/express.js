var fs = require('fs'),
    session = require('express-session'),
    bodyParser = require('body-parser'),
    helmet = require('helmet'),
    errorHandler = require('errorhandler'),
    cookieParser = require('cookie-parser'),
    cors = require('cors');

module.exports = function (app, config) {
    var sess = {
        secret: config.secret,
        resave: true,
        saveUninitialized: false
    };

    app.use(cors());
    //safety First
    app.use(helmet());

    //body parser
    app.use(bodyParser.json({limit:'5mb'}));
    app.use(bodyParser.urlencoded({ extended: true }));

    //session and cookies
    app.use(cookieParser());

    if (config.env === 'production') {
        app.set('trust proxy', 1); // trust first proxy
        sess.cookie.secure = true; // serve secure cookies
    }
    app.use(session(sess));

    //errorHandler
    if (config.env === 'development') {
        // only use in development
        app.use(errorHandler({log:true}));
    }
};