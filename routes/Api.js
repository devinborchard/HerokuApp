
const connectToDb = require('../DataBaseConnection/connection')

const Api = async (req,res) => {
    console.log('PAYLOAD RECEIVED: ', req.body)
    let dbData = await connectToDb()
    res.send({
        data: dbData
    })
}

//export function for router to send to index
module.exports = Api;