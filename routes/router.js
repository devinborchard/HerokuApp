//endpoint funtions to import
const {GetUser, GetAvailability, createUser} = require('./Api.js')

//setup
const express = require('express');
const router = express.Router();

//add functions to endpoints
router.post('/user',GetUser)
router.post('/checkAvailable',GetAvailability)
router.post('/createUser',createUser)

//export router for index to use
module.exports = router