class CityManager {
    constructor() {
        this.cityData = []
    }
    getCityData = async function (cityName) {
        let cityInfo = await $.get(`/city/${cityName}`)
        if (cityInfo.name){
        this.cityData.unshift(cityInfo)
        }
        else alert ("Please enter a city's name")
    }

    getDataFromDB = async function () {
        let citiesData = await $.get('/cities')
        this.cityData = citiesData
    }

    saveCity = async function (cityName) {
        let cityIndex = this.cityData.findIndex(c => c.name === cityName)
        const newCity = await $.post('/city', this.cityData[cityIndex])
        this.cityData.splice(cityIndex, 1, newCity)
    }

    removeCity = async function (cityName) {
        let cityIndex = this.cityData.findIndex(c => c.name === cityName)
        this.cityData.splice(cityIndex, 1)
        await $.ajax({
            url: `/city/${cityName}`,
            method: "DELETE",
            success: function () {
            }
        })

    }

    updateCity = async function (cityName) {
        let cityIndex = this.cityData.findIndex(c => c.name === cityName)
        let updatedCity = await $.ajax({
            url: `city/${cityName}`,
            method: "PUT",
            success: function () {
            }
        })
        this.cityData[cityIndex] = updatedCity
    }
}




