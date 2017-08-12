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

exports.checkout = function (req, res) {
    const shipping = req.body.shipping;
    const payment = req.body.payment;

    const address = {
        first_name: shipping.fn,
        last_name: shipping.ln,
        line_1: shipping.addr.l1,
        line_2: shipping.addr.l2,
        county: 'INDIA',
        postcode: shipping.postal,
        country: 'IN'
    }

    _cart.Checkout({
        customer: {
            name: shipping.fn + " " + shipping.ln,
            email: shipping.em
        },
        billing_address: address,
        shipping_address: address
    }).then((order) => {
        //dummy
        Moltin.Orders.Get(order.data.id)
            .then((order) => {
                response.res200(res, order);
            }, err => console.log(err));
        //Declamair : tried with all 3 method 
        /*
            Adyen	Braintree	Stripe
            adyen sandbox not got
            stripe doesnot work in INDIA and needs a business account
            Braintree works But mechanism of implementing on client side is a bit complex wit nonce and Token based
            Given enough time its a approchable solution
            Handsdown its awesome
            I know its a necessary 
            But for now i will skip it
        */
        // Moltin.Orders.Payment(order.data.id, {
        //     "gateway": "braintree",
        //     "method": "purchase",
        //     "first_name": address.first_name,
        //     "last_name": address.last_name,
        //     "number": payment.card_no,
        //     "month": payment.month,
        //     "year": payment.year,
        //     "verification_value": payment.ccv
        // }).then((paymentStatus) => {
        //     console.log('payment Status');
        //     console.log(paymentStatus);
        //     response.res200(res, paymentStatus);
        // }, (err) => console.log(err))
    }, err => console.log)

}