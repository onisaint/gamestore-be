var games = require('../../staticDB/games.json'),
    response = require('../../shared/util/util.respose')

exports.fetchGames = function(req, res){
    response.res200(res, games);
}