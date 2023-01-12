const express = require('express');
const route = express.Router();

const { listUserinfo } = require('../controllers/listUserinfoControllers');
const { updateinfo } = require('../controllers/updateinfoControllers');
route
  .get('/userinfo', listUserinfo)
  .put('/updateinfo', updateinfo)

module.exports = route;