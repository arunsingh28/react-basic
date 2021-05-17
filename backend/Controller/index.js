const express = require('express')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

const auth = require('../middleware/auth')

const app = express.Router()


// user modal
const _user = require('../Model/user')


// @route    POST /register
// @desc     for creating new user
// @access   public

app.post('/register', async (req, res) => {
    const { newInput } = req.body;
    console.log(req.body)
    const username = newInput.username
    const plainText = newInput.password
    const city = newInput.city
    const Name = newInput.Name

    if (!username || !plainText || !Name || !city) {
        return res.json({ status: 'error', error: 'Invalid Inputs' })
    }

    if (!username || typeof username !== 'string') {
        return res.json({ status: 'error', error: 'Invalid password/username' })
    }
    if (!plainText || typeof plainText !== 'string') {
        return res.json({ status: 'error', error: 'Invalid password' })
    }
    const password = await bcrypt.hash(plainText, 10)

    try {
        const user = await _user.create({
            username, password, city, Name
        })
        const token = jwt.sign(
            {
                id: user._id,
            },
            process.env.JWT_SERCET,
            // expire token in 2 hour
            { expiresIn: 3600 }
        )
        return res.json({
            status: 'ok',
            token,
            user: {
                username: user.username,
                city: user.city,
                name: user.Name,
            }
        })
    } catch (error) {
        // for unique user in DB
        if (error.code === 11000) {
            return res.json({ status: 'error', error: 'Username already in use' })
        } else {
            throw error
        }
    }
})


app.post('/login', async (req, res) => {
    const { newData } = req.body;

    const username = newData.username
    const password = newData.password

    if (!username || typeof username !== 'string') {
        return res.json({ status: 'error', error: 'Invalid password/username' })
    }
    if (!password || typeof password !== 'string') {
        return res.json({ status: 'error', error: 'Invalid password' })
    }


    const user = await _user.findOne({ username }).lean()

    if (!user) {
        return res.json({ status: 'error', error: 'invalid Username/password' })
    }
    if (await bcrypt.compare(password, user.password)) {
        // const token = jwt.sign(
        //     {
        //         id: user._id,
        //         username: user.username
        //     },
        //     process.env.JWT_SERCET
        // )
        // return res.json({ status: 'ok', token })
    }
    res.json({ status: 'error', error: 'invalid username/password' })

})


// @route    POST /register
// @desc     for creating new user
// @access   public

app.get('/user', auth, async (req, res) => {
    try {
       await _user.findById(req.user.id).select('-password') 
       .then(user => res.json(user))
    } catch (error) {
        throw error
    }
})


module.exports = app;