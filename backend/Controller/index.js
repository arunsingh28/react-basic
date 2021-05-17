const express = require('express')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

const app = express.Router()


// user modal
const _user = require('../Model/user')


// @route    POST /register
// @desc     for creating new user
// @access   public

app.post('/register', async (req, res) => {
    const { newInput } = req.body;
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
        const response = await _user.create({
            username, password, city, Name
        }).then(user => {
            res.json({
                user: {
                    id: user.id,
                    name: user.Name,
                    email: user.email,
                    city : user.city,
                    username : user.username
                }
            })
        })
    } catch (error) {
        // for unique user in DB
        if (error.code === 11000) {
            return res.json({ status: 'error', error: 'Username already in use' })
        } else {
            throw error
        }
    }
    res.json({ status: 'ok' })
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
        const token = jwt.sign(
            {
                id: user._id,
                username: user.username
            },
            process.env.JWT_SERCET
        )
        return res.json({ status: 'ok', token })
    }
    res.json({ status: 'error', error: 'invalid username/password' })

})



app.post('/admin', async (req, res) => {
    const { token } = req.body
    try {
        const user = await jwt.verify(token, process.env.JWT_SERCET)
        const _id = user.id
        const userData = await _user.findOne({ _id }).lean()
        return res.json({ status: 'ok', data: userData })
    } catch (error) {
        console.log(error)
        return res.json({ status: 'error', error: 'Signature error' })
    }
})


module.exports = app;