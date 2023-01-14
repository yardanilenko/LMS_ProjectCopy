const express = require('express');
const route = express.Router();
const { loginUser } = require('../controllers/login');

route
    .post('/api/login', loginUser)


module.exports = route;
