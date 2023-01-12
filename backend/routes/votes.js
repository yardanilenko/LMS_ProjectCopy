const express = require('express');
const route = express.Router();
const { allVotes, createVote, deleteVote, getVoteById, createVoteAnswer } = require('../controllers/votes');

route
    .get('/api/votes', allVotes)
    .post('/api/votes', createVote)
    .delete('/api/votes/:id',deleteVote)
    .get('/api/votes/:id', getVoteById)
    .post('/api/votes/:id', createVoteAnswer)

module.exports = route;
