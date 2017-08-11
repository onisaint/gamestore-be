var api = require('express').Router()

api
    //ROOT/api
    .use('/public', require('./public'))
    .use('/secure', require('./secure'))

module.exports = api