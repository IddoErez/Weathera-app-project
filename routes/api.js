const express = require('express')
const router = express.Router()
const moment = require('moment')
const axios = require('axios')
const urllib = require('urllib')
const Cities = require('../server/models/City')
router.use(express.json())
const apiKey = '6739778c165f3272aea54cb6c9b67754'


router.get('/city/:cityName', async (req, res) => {
    const { cityName } = req.params
    try {
        const weatherData = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`)
        const cityData = {
            name: cityName,
            temperature: Math.floor(weatherData.data.main.temp - 273.15),
            condition: weatherData.data.weather[0].description,
            conditionPic: `http://openweathermap.org/img/wn/${weatherData.data.weather[0].icon}@2x.png`
        }
        res.send(cityData)
    } catch (err) {
        res.send(err.message)
    }
})

router.get('/cities', async (req, res) => {
    const cities = await Cities.find({})
    res.send(cities)
})

router.post('/city', async (req, res) => {
    const city = new Cities(req.body)
    await city.save()
    res.send(city)
})

router.delete('/city/:cityName', async (req, res) => {
    const { cityName } = req.params
    const removedCity = await Cities.findOneAndRemove({ name: cityName })
    res.send(removedCity)
})

router.put('/city/:cityName', async (req, res) => {
    const { cityName } = req.params
    try {
        const weatherData = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`)
        const cityData = {
            name: cityName,
            temperature: Math.floor(weatherData.data.main.temp - 273.15),
            condition: weatherData.data.weather[0].description,
            conditionPic: `http://openweathermap.org/img/wn/${weatherData.data.weather[0].icon}@2x.png`
        }
        let updatedCity = await Cities.findOneAndUpdate({ name: cityName },{cityData} , {new: true})
        console.log("updated city", updatedCity)
        res.send(updatedCity)
      } catch (err) {
        res.send(err.message)
    }
  })

module.exports = router


