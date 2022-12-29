//endpoint funtions to import
const {
    GetUser, 
    GetAvailability, 
    createUser, 
    sendEmail,
    GetTags,
    GetRecipes,
} = require('../Api.js')

//setup
const express = require('express');
const router = express.Router();

//add functions to endpoints
router.post('/user',GetUser)
router.post('/checkAvailable',GetAvailability)
router.post('/createUser',createUser)
router.post('/emailer',sendEmail)

router.post('/recipes',GetRecipes)
router.get('/filterTags',GetTags)

//export router for index to use
module.exports = router