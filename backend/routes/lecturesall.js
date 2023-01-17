const express = require('express');
const route = express.Router();
const { lecturesall } = require('../controllers/lecturesall')

route
    .get('/lecturesall/:id', lecturesall)


module.exports = route;