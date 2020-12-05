class Renderer {
    renderData(allCityData) {
        const source = $("#cityData-template").html()
        const template = Handlebars.compile(source)
        let newHtml = template({ allCityData })
        $("#cityData").empty().append(newHtml)
}
}
