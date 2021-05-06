const express = require('express')
const JWT = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

const app = express.Router()


// user modal

const _user = require('../Model/user')




app.post('/register', async (req, res) => {
    const { newInput } = req.body;
    const username = newInput.username
    const plainText = newInput.password

    if (!username || typeof username !== 'string') {
        return res.json({ status: 'error', error: 'Invalid password' })
    }
    if (!plainText || typeof plainText !== 'string') {
        return res.json({ status: 'error', error: 'Invalid password' })
    }
    const password = await bcrypt.hash(plainText, 10)

    try {
        const response = await _user.create({
            username, password
        })
    } catch (error) {
        if (error.code === 11000) {
            return res.json({ status: 'error', error: 'Username already in use' })
        } else {
            throw error
        }
    }
    res.json({ status: 'ok' })
})


module.exports = app;