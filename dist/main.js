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
    console.log(city.cityData)
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
