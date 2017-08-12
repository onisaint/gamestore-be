exports.res = response;

//success
exports.res200 = function (res, message) {
    response(res, 200, {
        ok: true,
        payload: message
    })
};


//failure
exports.res400 = function (res) {
    response(res, 400, {
        ok:false,
        payload:'Bad Request'
    })
};


/**
 * Unauthorised
 * @param res
 */
exports.res401 = function (res) {
    response(res, 401, {
        ok: false,
        payload: 'Unauthorised'
    })
};


exports.res500 = function(res){
    response(res, 500, {
        ok:false,
        payload:'something went wrong'
    })
}

/**
 *
 * @param resObj
 * @param statusCode
 * @param message
 * @returns resObject
 */
function response (resObj, statusCode, message) {
    resObj
        .status(statusCode)
        .send(message);
}