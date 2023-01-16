const router = require('express').Router();

const {findOrCreateChat, findAllChatsForCurrentUser, findHistoryForChat} = require("../controllers/chats");



router
    .post('/api/chats', findOrCreateChat)
    .get('/api/chats', findAllChatsForCurrentUser)
    .get(`/api/chats/:id`, findHistoryForChat)


module.exports = router;
