const express = require('express');
const route = express.Router();
const { allEvents } = require('../controllers/events')

route
    .get('/api/events', allEvents)


module.exports = route;
