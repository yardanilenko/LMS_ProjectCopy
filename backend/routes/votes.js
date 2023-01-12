const express = require('express');
const route = express.Router();
const { allVotes, createVote } = require('../controllers/votes');

route
    .get('/votes', allVotes)
    .post('/votes', createVote)

module.exports = route;
