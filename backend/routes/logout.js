const express = require("express");
const route = express.Router();
const { userLogout } = require("../controllers/logout");

route.post("/api/logout", userLogout);

module.exports = route;
