'use strict';

var express = require('express');
var controller = require('./game.controller');

var router = express.Router();

router.get('/', controller.index);
router.get('/play', controller.play);
router.get('/listgames', controller.listGames);

module.exports = router;