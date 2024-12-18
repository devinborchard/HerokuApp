//endpoint funtions to import
const {
    // GetUser, 
    saveJournalEntry,
    getJournalEntries,
    GetUser,
    deleteJournalEntry,
    checkUsername,
    createUser
} = require('../Api.js')

const {authMiddleware} = require('../middlewares/auth.js')
const {routeLoggingMiddleware} = require('../middlewares/logging.js')


//setup
const express = require('express');
const router = express.Router();

//add functions to endpoints
router.post('/user', authMiddleware, routeLoggingMiddleware, GetUser)
router.post('/checkUserName', authMiddleware, routeLoggingMiddleware, checkUsername)
router.post('/createUser', authMiddleware, routeLoggingMiddleware, createUser)
// router.post('/checkAvailable',GetAvailability)
// router.post('/createUser',createUser)
// router.post('/emailer',sendEmail)
router.post('/saveJournalEntry', authMiddleware, routeLoggingMiddleware, saveJournalEntry)

// router.post('/recipes',GetRecipes)
// router.get('/filterTags',GetTags)
router.get('/getJournalEntries',authMiddleware, routeLoggingMiddleware, getJournalEntries)
router.get('/deleteJournalEntry',authMiddleware, routeLoggingMiddleware, deleteJournalEntry)

//export router for index to use
module.exports = router