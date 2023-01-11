const express = require('express');
const route = express.Router();
const { allVotes } = require('../controllers/votes');

route
    .get('/events', allVotes)


module.exports = route;
