const express = require('express');
const route = express.Router();
const { downloadfile } = require('../controllers/downloadfile')

route
    .get('/downloadfile/:id', downloadfile)


module.exports = route;