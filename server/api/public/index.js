var public = require('express').Router();

public
    .get('/games', require('./games').fetchGames)


module.exports = public