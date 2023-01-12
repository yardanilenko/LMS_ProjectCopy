const express = require('express');
const route = express.Router();
const { groups } = require('../controllers/groups')

route
    .get('/groups', groups)


module.exports = route;