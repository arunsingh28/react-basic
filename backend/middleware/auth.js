const jwt = require('jsonwebtoken')

function auth(req, res, next) {
    const token = req.header('x-auth-token')
    // check token
    if (!token) {
        return res.status(401).json({ status: 'error', error: 'Access denied' })
    }

    try {
        // verify token
        const decoded = jwt.verify(token,process.env.JWT_SERCET)
        req.user = decoded
        next()
    } catch (error) {
        return res.status(400).json({status:'error',error:'token not valid'})
    }
}

module.exports = auth