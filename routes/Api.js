
const {getUserFromDb} = require('../DataBaseConnection/connection')


const GetUser = async (req,res) => {
    let dbData = await getUserFromDb(req)
    res.send({
        data: dbData
    })
}
//export function for router to send to index
module.exports = {
    GetUser
};