var public = require('express').Router();

public
    // ROOT/API/public/
    .get('/games', require('./games').fetchGames)
    .get('/cart', require('./cart').getItems)
    .get('/endsession', require('./cart').deleteCart)
    .post('/cart', require('./cart').add)
    .post('/checkout', require('./cart').checkout)
    .delete('/cart', require('./cart').remove)

module.exports = public