const express = require('express');
const route = express.Router();
const { wiki } = require('../controllers/wiki')

route
    .get('/wiki', wiki)


module.exports = route;