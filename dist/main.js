let city = new CityManager()
let render = new Renderer()

const loadPage = async () => {
    let citiesData = await city.getDataFromDB()
    console.log(citiesData)
    render.renderData(city.cityData)
}

$("#showWeather").on('click', async function () {
    let cityName = $('#city-input').val()
    let cityData = await city.getCityData(cityName)
    console.log(cityData)
    render.renderData(city.cityData)
    console.log(city.cityData)
})

$("#cityData").on("click", ".saveCity", function () {
    let cityName = $(this).closest(".city").find(".cityName").text()
      console.log(cityName)
    let cityToSave = city.saveCity(cityName)
    render.renderData(city.cityData)

})

$("#cityData").on("click", ".deleteCity", function () {
    let cityName = $(this).closest(".city").find(".cityName").text()
    let cityToDelete = city.removeCity(cityName)
    render.renderData(city.cityData)
})

loadPage()
