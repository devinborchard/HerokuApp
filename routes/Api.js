
const {DBConnection} = require('../DataBaseConnection/DBConnection')
const db = new DBConnection(process.env.DB_URI)

const GetUser = async (req,res) => {
    let dbData = await db.getUserFromDb(req)
    res.send({
        data: dbData
    })
}

const createUser = async(req, res) => {
    let dbData = await db.createUserInDB(req)
    res.send({
        data: dbData
    })
}

const GetAvailability  = async (req,res) => {
    //res.send(200)
    let dbData = await db.checkCredsAvailableDb(req)
    let available = true
    if(dbData.length == 0){
        res.send({
            available
        })
    }
    else{
        available = false
        for(let i = 0 ; i < dbData.length; i++){
            let user = dbData[i]
            console.log(user,i)
            let message = ''
            if(user.email == req.body.email){
                console.log('flag1')
                message = 'Email is already in use'
            }
            if(user.user_name === req.body.username){
                console.log('flag2')
                message = 'Username is taken'
            }
            if(message){
                res.send({
                    available,
                    message,
                })
                break;
            }
            
        }
    }
}
//export function for router to send to index
module.exports = {
    GetUser,
    GetAvailability,
    createUser
};