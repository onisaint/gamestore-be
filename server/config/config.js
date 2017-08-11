var path = require('path');
var rootPath = path.normalize(__dirname+'/../../');

module.exports = {
    development: {
        rootPath: rootPath,
        db: 'mongodb://127.0.0.1/gs',
        portHttp: process.env.PORT || 7777,
        secret: 'gamestore',
        env: 'development'
    }
};
