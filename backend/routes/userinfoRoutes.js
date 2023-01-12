const express = require('express');
const route = express.Router();

const { listUserinfo } = require('../controllers/listUserinfoControllers');

route
  .get('/userinfo', listUserinfo)

module.exports = route;