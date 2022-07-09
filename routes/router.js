//endpoint funtions to import
const Api = require('./Api.js')

//setup
const express = require('express');
const router = express.Router();

//add functions to endpoints
router.post('/api',Api)

//export router for index to use
module.exports = router