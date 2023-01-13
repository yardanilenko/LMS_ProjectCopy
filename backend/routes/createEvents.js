const express = require('express');
const route = express.Router();
const { createevent } = require('../controllers/createevent')

route
    .post('/createevent', createevent)


module.exports = route;