
const {DBConnection} = require('./DataBaseConnection/DBConnection')
const { sendNodeMailerEmail } = require('./handlers/emailHandler')
const { blackListTags } = require('./utils/blacklistTags')
// const db = new DBConnection(process.env.DB_CREDS.split(','))

const fs = require('fs')



// const GetUser = async (req,res) => {
//     let dbData = await db.getUserFromDb(req)
//     res.send({
//         data: dbData
//     })
// }

// const sendEmail = async(req, res) => {
//     let emailed = await sendNodeMailerEmail(req.body)
//     if(emailed){
//         res.sendStatus(200)
//     }else{
//         res.sendStatus(503)
//     }

// }

const saveJournalEntries = async(req, res) => {
    console.log("saveJournalEntries: ", req.body)
    fs.writeFile('entries.txt', JSON.stringify(req.body), (err) => {
        // In case of a error throw err.
        if (err) throw err;
    })
    res.send({
        data: 0
    })
}

const getJournalEntries = async(req, res) => {
    let entries = ""
    fs.readFile('entries.txt', 'utf8', function (err, data) {
        const parsed = JSON.parse(data)
        entries = parsed;
        console.log("ENRIES: ", entries)

        console.log("getJournalEntries")
        res.send({
            data: entries
        })
    });
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
    saveJournalEntries,
    getJournalEntries
    // GetUser,
    // sendEmail,
    // GetAvailability,
    // createUser,
    // GetTags,
    // GetRecipes
};