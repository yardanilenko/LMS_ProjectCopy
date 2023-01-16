const express = require('express');
const route = express.Router();
const { group } = require('../controllers/group')
const { groupnames } = require('../controllers/groupnames')

route
    .get('/groups/:id', group)
    .get('/groupsnames/:id', groupnames)


module.exports = route;

