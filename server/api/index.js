const api = require('express').Router()

api
    //ROOT/api
    .use(require('../shared/s.jwt').jwtAuth)
    .use('/public', require('./public'))
    .use('/secure', require('./secure'))

module.exports = api