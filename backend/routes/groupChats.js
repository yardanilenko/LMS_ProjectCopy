const router = require('express').Router();

const {findOrCreateGroup, getPublicRooms} = require("../controllers/groupChats");



router
    .post('/api/groupChats', findOrCreateGroup)
    .get('/api/groupChats', getPublicRooms)


module.exports = router;
