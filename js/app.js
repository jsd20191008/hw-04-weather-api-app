$(function () {
// pseudocode:
// 1) Create input box to input city name -
// 2) Create clickable submit button to input a city -
// 3) create function to call the Openweather API to retrieve results for the city entered by the user
// 4) Create a field to display results
//      Results should include:
//      - [ ] City name
//      - [ ] Current temperature (displayed in Fahrenheit)
//      - [ ] Weather description
//      - [ ] Min temp
//      - [ ] Max temp
// 5) create a function to display results to display field
// create an if statement to determine color of temperature display depending on temperature
//
$('#submit-btn').click(() => {
  event.preventDefault()
  //console.log('Search button is working')

  searchCity()

  })

  function searchCity(searchTerm) {
const url = 'https://api.openweathermap.org/data/2.5/weather?q=London&APPID={Insert_API_Key_}'
  // make API request using #.ajax()
      $.ajax({
        url: url,
        type: 'GET',
        data: { q: searchTerm }

      })
      .done((response) => {
        console.log(response)
        // get response from successful API call and
        // pass response data to the updateUi() function
        displayResults(response)
      })
      .fail((error) => {
        console.log(error)
        alert('an error occurred')
      })
    }

    function displayResults(city) {
      // extract the information from the objects
      const cityName = city.name
      const cityTemp = city.main.temp
      const cityDescript = city.weather[0].description
      const cityTempMin = city.main.temp_min
      const cityTempMax = city.main.temp_max

      // use jQuery to update the UI
      $('.city').text(cityName)
      $('.temp').text(cityTemp)
      $('.description').text(cityDescript)
      $('.temp_min').text(cityTempMin)
      $('.temp_max').text(cityTempMax)
    }

})
