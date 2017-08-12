var public = require('express').Router();

public
    // ROOT/API/public/
    .get('/games', require('./games').fetchGames)
    .post('/cart', require('./cart').add)
    .delete('/cart', require('./cart').remove)

module.exports = public