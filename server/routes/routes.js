var response = require('../shared/util/util.respose')

module.exports = function (app) {
    app.use('/api', require('../api'))

    app.get('/test', function (req, res) {
        response.res200(res, {
                ok:true,
                payload:''
            })
    });

    app.get('/*', function (req, res) {
        res.status(404);
        res.end();
        return;
    });

};