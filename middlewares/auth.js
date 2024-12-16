const decodeBase64 = (encoded) => {
    var b = Buffer.from(encoded, 'base64')
    return b.toString();
}

const authMiddleware = (req, res, next) => {
    const auth = req.headers.authorization
    try{
        const key = decodeBase64(auth.substring(7,auth.length))
        if (key===process.env.AUTH_KEY){
            next()
        }
        else{
            res.sendStatus(403)
        }
    }
    catch(e){
        res.sendStatus(402)
    }
}

module.exports = {
    authMiddleware
}