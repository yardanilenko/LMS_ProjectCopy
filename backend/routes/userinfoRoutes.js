const express = require('express');
const route = express.Router();

const { listUserinfo } = require('../controllers/listUserinfoControllers');
const { updateinfo } = require('../controllers/updateinfoControllers');
const { universalUserinfo } = require('../controllers/universalUserinfo');
route
  .get('/userinfo', listUserinfo)
  .get('/userinfo/:id', universalUserinfo)
  .put('/updateinfo', updateinfo)

module.exports = route;