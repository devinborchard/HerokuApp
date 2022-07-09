
const Api = (req,res) => {
    res.send(200)
    console.log('PAYLOAD RECEIVED: ', req.body)
}

//export function for router to send to index
module.exports = Api;