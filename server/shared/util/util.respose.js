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