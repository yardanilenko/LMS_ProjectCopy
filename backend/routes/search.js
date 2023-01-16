const router = require('express').Router();

const {allUsers, searchUsers} = require("../controllers/search");



router
    .get('/api/users', allUsers)
    .get('/api/search/users', searchUsers);

module.exports = router;
