const Moltin = require('../../config/moltin').Moltin,
    response = require("../../shared/util/util.respose");

const _cart = Moltin.Cart;

exports.add = function (req, res) {
    _cart.AddProduct(req.body._id, 1)
        .then((item) => {
            response.res200(res, item);
        }, (err) => {
            response.res500(res);
        })
}

exports.remove = function (req, res) {
    _cart.RemoveItem(req.body._id, 1)
        .then((item) => {
            response.res200(res, item);
        }, (err) => {
            response.res500(res);
        })
}