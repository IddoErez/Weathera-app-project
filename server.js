const express = require('express')
const app = express()
const api = require('./routes/api')
const mongoose = require('mongoose')
const path = require('path')
require('dotenv').config()
const {PORT} = process.env
mongoose.connect('mongodb://localhost/CitiesDB', { useNewUrlParser: true })
app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'node_modules')))

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use('/', api)


app.listen(PORT, function () {
    console.log(`Running on port ${PORT}`)
})