var fs = require('fs');

module.exports = function (app, config) {
    app.listen(config.portHttp, function (err) {
        if(err) console.log(err);
        else console.log('listning http = ' + config.portHttp);
    })
};