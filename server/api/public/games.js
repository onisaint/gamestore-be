var Moltin = require('../../config/moltin').Moltin,
    response = require('../../shared/util/util.respose')

exports.fetchGames = function(req, res){
     Moltin.Products.All()
     .then((products) => {
        response.res200(res, products.data);
    },() => {
        response.res500(res)
    })
    
}