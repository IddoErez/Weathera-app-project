class CityManager {
    constructor() {
        this.cityData = []
    }
    getCityData = async function (cityName) {
        let cityInfo = await $.get(`/city/${cityName}`)
        this.cityData.unshift(cityInfo)
        return cityInfo
    }

    getDataFromDB = async function () {
        let citiesData = await $.get('/cities')
        citiesData.forEach(c => this.cityData.push(c))
        return (this.cityData)
    }

    saveCity = async function (cityName) {
        let CityToSave = this.cityData.find(c => c.name === cityName)
        const newCity = await $.post('/city', CityToSave) 
        let cityIndex = this.cityData.findIndex(c => c.name === cityName)
        this.cityData.splice(cityIndex, 1)
        this.cityData.unshift(newCity)
        return (this.cityData)
        //{ _id}
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
        return (this.cityData)
    }
}




