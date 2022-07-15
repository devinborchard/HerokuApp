//endpoint funtions to import
const {GetUser} = require('./Api.js')

//setup
const express = require('express');
const router = express.Router();

//add functions to endpoints
router.post('/user',GetUser)

//export router for index to use
module.exports = router