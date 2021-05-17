const express = require('express')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

const router = express.Router()

const _user = require('../Model/user')

router.post('/v1', async (req, res) => {
    console.log(req.body)
    const { newData } = req.body;
    const username = newData.username
    const password = newData.password

    try {
        const user = await _user.findOne({ username }).lean()
        if (!user) {
            return res.status(404).json({ status: 'error', error: 'user already exists' })
        }
        if (await bcrypt.compare(password, user.password)) {
            const token = jwt.sign(
                {
                    id: user._id,
                },
                process.env.JWT_SERCET,
                // expire token in 1 hour
                { expiresIn : 3600 }
            )
            return res.json({
                status: 'ok',
                token,
                user: {
                    username: user.username,
                    city : user.city,
                    name : user.Name,
                }
            })
        } else {
            return res.status(404).json({ status: 'error', error: 'password not matching' })
        }

    } catch (error) {
        return res.status(404).json({ status: 'error', error: error })
    }

})



module.exports = router;