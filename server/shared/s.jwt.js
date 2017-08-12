const jwt = require('jwt-simple'),
    config = require('../config/config')
    response = require('./util/util.respose');

exports.jwtAuth = function (req, res, next) {
        if (!req.headers.authorization) {
            response.res401(res);
        } else {
            if ((req.headers.authorization.split(' ')[1] === 'undefined') || (req.headers.authorization.split(' ')[1].split('.').length) !== 3) {
                response.res401(res);
            } else {
                let token = req.headers.authorization.split(' ')[1];
                let payload = jwt.decode(token, config.development.secret);

                if (!payload.sub || payload.sub === 'undefined') {
                    // console.log('jwt g1 badreq');
                    response.res400(res);
                } else {
                    let userId = payload.sub.id;
                    let sessionData = payload.sub.sessionData;
                    // do check for proper authorisation . imlemeted for dummy 
                    next();
                }
            }
        }
}

exports.jwtGen = function(obj){
    return jwt.encode(obj, config.development.secret);
}