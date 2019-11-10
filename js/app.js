$(function () {

  let api_response
  let metric = "Imperial"

  // Clicking the submit button starts the searh
  $("#search").submit((event) => {
    event.preventDefault()

    // Search Box Value
    const searchBox = $("#query").val()
    console.log(`You are searching for: ${searchBox}`)

    // Send Search input to openweather
    search(searchBox)
  })

  // Hit Openweather API
  function search (searchInput) {
    const url = 'https://api.openweathermap.org/data/2.5/weather'
    const apiKey = '4079027f2d25c298d832150acc68fe15'

    let api_request

    // Determine if the search is a zipcode or city and adjust the request
    if (zipOrCity(searchInput)) {
      api_request = { zip: searchInput, APPID: apiKey, units: metric }
    } else {
      api_request = { q: searchInput, APPID: apiKey, units: metric }
    }

    // Ajax request
    $.ajax({
      url: url,
      type: 'GET',
      data: api_request
    })
    .done((response) => {
      console.log(response)
      updateTable(response)
      tempColor()
    })
    .fail((error) => {
      console.log(error)
    })
  }

  // Update the Table with the Response
  function updateTable(response) {
    $("#cityName").text(response.name)
    $("#currentTemp").text(response.main.temp)
    $("#weatherDescription").text(response.weather[0].description.toUpperCase())
    $("#minTemp").text(response.main.temp_min)
    $("#maxTemp").text(response.main.temp_max)
  }


  // Check to see if the search input is a zipcode
  function zipOrCity(searchInput) {
    regexp = /^[0-9]{5}(?:-[0-9]{4})?$/;

       if (regexp.test(searchInput))
         {
           return true;
         }
       else
         {
           return false;
         }
  }

  // Change the color of the Current Temperature
  function tempColor() {
    const temp = parseInt($("#currentTemp").text())

    if (temp < 40) {
      $("#currentTemp").css({
        color: "blue"
      })
    } else if (temp > 85) {
      $("#currentTemp").css({
        color: "red"
      })
    } else {
      $("#currentTemp").css({
        color: "black"
      })
    }
  }

})
