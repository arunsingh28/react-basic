const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

require('dotenv').config()


const port = process.env.PORT || 5000

// init express
const app = express()

app.use(cors())

// body parser
app.use(express.json())
app.use(express.urlencoded({ extended: false }))


// setup database
mongoose.connect(process.env.URI, { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true })
    .then(() => {
        console.log('database connected')
    })
    .catch(err => console.log(err))


app.use('/API', require('./Controller/index'))
app.use('/API/auth', require('./config/auth'))
// server listing
app.listen(port, console.log(`server is up on port : ${port}`))