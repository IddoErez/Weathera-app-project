class CityManager {
    constructor() {
        this.cityData = []
    }
    getCityData = async function (cityName) {
        let cityInfo = await $.get(`/city/${cityName}`)
        this.cityData.unshift(cityInfo)
        console.log(cityInfo)
        return cityInfo
    }

    getDataFromDB = async function () {
        let citiesData = await $.get('/cities')
        citiesData.forEach(c=> this.cityData.push(c))
        console.log(this.cityData)
        return (this.cityData)
    }
  
    saveCity = async function (cityName) {
        let CityToSave = this.cityData.find(c => c.name === cityName) 
        await $.post('/city', CityToSave, function (response) {
            console.log(response)
        })
    }

    removeCity = async function (cityName) {
    let cityIndex = this.cityData.findIndex(c => c.name === cityName)
    this.cityData.splice(cityIndex, 1)
     await  $.ajax({
            url: `/city/${cityName}`,
            method: "DELETE",
            success: function ( ) {
                 console.log(`the city ${cityName} has been deleted`)
             }
        })
     
    }   
}


