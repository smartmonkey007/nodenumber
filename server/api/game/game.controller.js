/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /things              ->  index
 * POST    /things              ->  create
 * GET     /things/:id          ->  show
 * PUT     /things/:id          ->  update
 * DELETE  /things/:id          ->  destroy
 */

'use strict';

var _ = require('lodash');

// Get list of things
exports.index = function(req, res) {
  res.json([
      {message:"Game found"},{message:"Play the game"}
    ]);
};

exports.play = function(req, res) {
  res.json({message:"would you like to play a game with me."});
};

exports.listGames = function (req, res) {
    var games = {
        games: [{
                game: "Game1"},
                {
                    game: "Game2"
                }]
            };
    
    res.json(games);
}