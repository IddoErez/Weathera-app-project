class CityManager {
    constructor() {
        this.cityData = []
    }

    getDataFromDB = async function () {
        let citiesData = await $.get('/cities')
        console.log(citiesData)
        this.cityData = citiesData.slice[0]
    }
    getCityData = async function (cityName) {
        let cityInfo = await $.get(`/city/${cityName}`)
        console.log(cityInfo)
        return cityInfo
    }

    saveCity = async function (cityName) {
        let CityToSave = this.cityData.find(c => c.name === cityName)
        await $.post('/city/', CityToSave, function (response) {
            console.log(response)
        })
    }

    removeCity = async function (cityName) {
     await  $.ajax({
            url: `/city/${cityName}`,
            method: "DELETE",
            success: function ( ) {
                 console.log(`the city ${cityName} has been deleted`)
             }
        })
     
    }

}


