module.exports = function (app) {
    app.get('/test', function (req, res) {
        res
            .status(200)
            .send({
                ok:true,
                payload:''
            });
    });

    app.get('/*', function (req, res) {
        res.status(404);
        res.end();
    });

};