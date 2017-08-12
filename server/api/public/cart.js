const Moltin = require('../../config/moltin').Moltin,
    response = require("../../shared/util/util.respose");

const _cart = Moltin.Cart;

exports.deleteCart = function (req, res) {
    // user ends session i.e, app
    console.log('end session')
    _cart.Delete().then(() => {
        console.log('delete')
        response.res200(res, 'deleted')
    });
}

exports.getItems = function (req, res) {
    _cart.Items()
    .then((cart) => {
        response.res200(res, cart)
    }, (err) => {
        response.res500(res);
    })
}

exports.add = function (req, res) {
    _cart.AddProduct(req.body._id, 1)
        .then((cart) => {
            response.res200(res, cart);
        }, (err) => {
            response.res500(res);
        })
}

exports.remove = function (req, res) {
    _cart.RemoveItem(req.body._id)
        .then((cart) => {
            console.log(cart)
            response.res200(res, cart);
        }, (err) => {
            response.res500(res);
        })
}