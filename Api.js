
const {DBConnection} = require('./DataBaseConnection/DBConnection')
// const { sendNodeMailerEmail } = require('./handlers/emailHandler')
// const { blackListTags } = require('./utils/blacklistTags')
const db = new DBConnection(process.env.DB_URI)

const fs = require('fs')



const GetUser = async (req,res) => {
    try{
        let dbData = await db.getUserFromDb(req)
        res.send(dbData)
    }
    catch(e){
        console.error("Error getting user data: ", e)
        res.sendStatus(500)
    }
}

const checkUsername = async (req,res) => {
    try{
        let dbData = await db.checkUserName(req)
        res.send(dbData)
    }
    catch(e){
        console.error("Error getting userName data: ", e)
        res.sendStatus(500)
    }
}

const createUser = async (req,res) => {
    try{
        let user_id = await db.createUser(req)
        res.send({user_id})
    }
    catch(e){
        console.error("Error creating user data: ", e)
        res.sendStatus(500)
    }
}
// const sendEmail = async(req, res) => {
//     let emailed = await sendNodeMailerEmail(req.body)
//     if(emailed){
//         res.sendStatus(200)
//     }else{
//         res.sendStatus(503)
//     }

// }

const saveJournalEntry = async(req, res) => {
    try{
        db.saveJournalEntriesToDb(req)
        res.sendStatus(200)
    }
    catch(e){
        console.error("Error getting journal data: ", e)
        res.sendStatus(500)
    }
}

const deleteJournalEntry = async(req, res) => {
    try{
        db.deleteJournalEntryFromDb(req)
        res.sendStatus(200)
    }
    catch(e){
        console.error("Error deleting journal entry: ", e)
        res.sendStatus(500)
    }
}

const getJournalEntries = async(req, res) => {
    // console.log("REQ: ", req)
    try{
        let dbData = await db.getJournalEntriesFromDb(req)
        res.send(dbData)
    }
    catch(e){
        console.error("Error getting journal data: ", e)
        res.sendStatus(500)
    }
}

// const createUser = async(req, res) => {
//     let dbData = await db.createUserInDB(req)
//     res.send({
//         data: dbData
//     })
// }

// const GetAvailability  = async (req,res) => {
//     //res.send(200)
//     let dbData = await db.checkCredsAvailableDb(req)
//     //console.log("DBDATA: ", dbData)
//     let available = true
//     if(dbData.length == 0){
//         res.send({
//             available
//         })
//     }
//     else{
//         available = false
//         for(let i = 0 ; i < dbData.length; i++){
//             let user = dbData[i]
//             console.log(user,i)
//             let message = ''
//             if(user.email == req.body.email){
//                 console.log('flag1')
//                 message = 'Email is already in use'
//             }
//             if(user.username === req.body.username){
//                 console.log('flag2')
//                 message = 'Username is taken'
//             }
//             if(message){
//                 res.send({
//                     available,
//                     message,
//                 })
//                 break;
//             }
            
//         }
//     }
// }

// const GetRecipes = async(req, res) => {
//     const {filters, limit, index} = req.body
//     let recipes = await db.getRecipesByTags(filters,index, limit)

//     res.send(recipes)
// }

// const GetTags = async(req, res) => {
//     let rawTags = await db.getRecipeTagsFromDb()

//     uniqueTags = []
//     let tagsString = ''
//     for(let i = 0 ; i < rawTags.length; i++){
//         let tags = rawTags[i].tags
//         tags = tags.replaceAll('\'','"')
//         tags = JSON.parse(tags)

        
        
//         for(let j = 0 ; j < tags.length; j++){
//             if(!uniqueTags.includes(tags[j]) && !blackListTags.includes(tags[j])){
//             //if(!uniqueTags.includes(tags[j])){
//                 tagsString = tagsString + `"${tags[j]}",` + '\n'
//                 uniqueTags.push(tags[j])
//             }
//         }
//     }


//     fs.writeFile('alltags.txt', tagsString, (err) => {
//         // In case of a error throw err.
//         if (err) throw err;
//     })


//     res.send({
//         data: uniqueTags
//     })
// }
//export function for router to send to index
module.exports = {
    saveJournalEntry,
    getJournalEntries,
    GetUser,
    deleteJournalEntry,
    checkUsername,
    createUser
    // sendEmail,
    // GetAvailability,
    // createUser,
    // GetTags,
    // GetRecipes
};