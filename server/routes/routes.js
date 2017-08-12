const response = require('../shared/util/util.respose'),
    jwt = require('../shared/s.jwt');

module.exports = function (app) {
    app.use('/api', require('../api'))


    //dummy code to gen tokens
    app.get('/gen', function (req, res) {
        let ip = req.header('x-forwarded-for') || req.connection.remoteAddress;
        
        let sessionData = {
            signedIn: Date.now(),
            client: {
                ip: ip.toString().charAt(0) === ':' ? "Localhost" : ip,
            },
            sessionTag:''
        };

        let payload = {
            iss: req.hostname,
            sub: {
                id: 'userIDqq1', //dummy user id
                sessionData: sessionData
            }
        };

        response.res200(res, jwt.jwtGen(payload))
    });


    app.get('/*', function (req, res) {
        res.status(404);
        res.end();
        return;
    });
};