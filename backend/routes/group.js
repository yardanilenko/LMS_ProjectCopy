const express = require('express');
const route = express.Router();
const { group } = require('../controllers/group')

route
    .get('/groups/:id', group)


module.exports = route;

