let city = new CityManager()
let render = new Renderer()

const loadPage = async () => {
    let citiesData = await city.getDataFromDB()
    render.renderData(city.cityData)
}
loadPage()

$("#city-input").on('keyup', async (e) => {
    if (e.keyCode === 13) {
        let cityName = $('#city-input').val()
        let cityData = await city.getCityData(cityName)
        render.renderData(city.cityData)
     }
})

$("#showWeather").on('click', async function () {
    let cityName = $('#city-input').val()
    let cityData = await city.getCityData(cityName)
    render.renderData(city.cityData)
    
})

$("#cityData").on("click", "#save", async function () {
    let cityName = $(this).closest(".city").find(".cityName").text()
    let cityToSave = await city.saveCity(cityName)
    render.renderData(city.cityData)
})

$("#cityData").on("click", "#delete", function () {
    let cityName = $(this).closest(".city").find(".cityName").text()
    let cityToDelete = city.removeCity(cityName)
    render.renderData(city.cityData)
})

$("#cityData").on("click", "#refresh", function () {
    let cityName = $(this).closest(".city").find(".cityName").text()
    let cityToUpdate = city.updateCity(cityName)
    render.renderData(city.cityData)
})


// User_id
// "_id": {
//     "$oid": "5fd18310612b34b060460a20"
//   },
//   "userName": "John Lennon",
//   "userPassword": "567",
//   "__v": 0
// }

// {
//     "_id": {
//       "$oid": "5fd182f7612b34b060460a1f"
//     },
//     "userName": "Ben Johnson",
//     "userPassword": "123",
//     "__v": 0
//   }
