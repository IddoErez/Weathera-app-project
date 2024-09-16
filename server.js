const express = require('express')
const app = express()
const api = require('./routes/api')
const mongoose = require('mongoose')
const path = require('path')
require('dotenv').config()

mongoose.connect(process.env.MONGODB_URI||'mongodb://localhost/CitiesDB')

app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'node_modules')))

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use('/', api)

const port = process.env.PORT || 5000
app.listen(port, function () {
    console.log(`Running on port ${port}`)
})
  