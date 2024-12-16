//endpoint funtions to import
const {
    // GetUser, 
    saveJournalEntries,
    getJournalEntries,
    GetUser
} = require('../Api.js')

const {authMiddleware} = require('../middlewares/auth.js')


//setup
const express = require('express');
const router = express.Router();

//add functions to endpoints
router.post('/user', authMiddleware, GetUser)
// router.post('/checkAvailable',GetAvailability)
// router.post('/createUser',createUser)
// router.post('/emailer',sendEmail)
router.post('/saveJournalEntries', authMiddleware, saveJournalEntries)

// router.post('/recipes',GetRecipes)
// router.get('/filterTags',GetTags)
router.get('/getJournalEntries',authMiddleware, getJournalEntries)

//export router for index to use
module.exports = router