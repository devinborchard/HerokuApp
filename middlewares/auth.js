const decodeBase64 = (encoded) => {
    var b = Buffer.from(encoded, 'base64')
    return b.toString();
}

const authMiddleware = (req, res, next) => {
    const auth = req.headers.authorization
    // console.log("AUTH: ", auth)
    try{
        const key = decodeBase64(auth.substring(7,auth.length))
        if (key!=process.env.AUTH_KEY){
            res.sendStatus(403)
        }
        else{
            next()
        }
    }
    catch(e){
        res.sendStatus(401)
    }
}

module.exports = {
    authMiddleware
}