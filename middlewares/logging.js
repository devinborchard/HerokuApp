const routeLoggingMiddleware = (req, res, next) => {
    // console.log('req: ', req)
    console.log(`Endpoint called: ${req.method} - ${req.url}`)
    next()
}

module.exports = {
    routeLoggingMiddleware
}