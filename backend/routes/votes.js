const express = require('express');
const route = express.Router();
const { allVotes, createVote, deleteVote } = require('../controllers/votes');

route
    .get('/votes', allVotes)
    .post('/votes', createVote)
    .delete('/votes/:id',deleteVote)

module.exports = route;
