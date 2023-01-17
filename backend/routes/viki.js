const express = require('express');
const route = express.Router();
const { viki } = require('../controllers/viki')

route
    .get('/viki', viki)


module.exports = route;