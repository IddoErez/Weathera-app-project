const express = require('express')
const app = express()
const api = require('./routes/api')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const path = require('path')
const { cssNumber } = require('jquery')
mongoose.connect('mongodb://localhost/CitiesDB', { useNewUrlParser: true })

app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'node_modules')))

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use('/', api)



const port = 4200
app.listen(port, function () {
    console.log(`Running on port ${port}`)
})