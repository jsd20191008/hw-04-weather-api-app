$(document).ready(function () {
  $('#submit-btn').click(() => {

    refreshSearch()

    const city = $('#city-type').val()

    getWeatherByCity(city)

  })


  function getWeatherByCity (city) {
    axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=1c739a9713a0919a3024a089c3b027df`)
    .then((response) => {
      console.log(response.data)
      displayCityName(response.data.name)
      displayCurrentTemperature(convertToFahrenheit(response.data.main.temp))
      displayWeatherDescription(response.data.weather[0].description)
      displayMinTemp(convertToFahrenheit(response.data.main.temp_min))
      displayMaxTemp(convertToFahrenheit(response.data.main.temp_max))

    }).catch((error) => {
      console.log(error)
    })

    }




  function displayCityName (cityName) {
    $('#current-city').append(
      `<h4>Current City:</h4> <p>${cityName}</p>`)
  }

  function displayCurrentTemperature (temperature) {
    $('#current-temp').append(
      `<h4>Current Temperature:</h4> <p>${temperature} F°</p>`)
      setTempFontColor(temperature)
  }

  function displayWeatherDescription (description) {
    $('#description').append(
      `<h4>Description:</h4> <p>${description}</p>`)
  }

  function displayMinTemp (temperature) {
    $('#min-temp').append(
      `<h4>Today's Low:</h4> <p>${temperature} F°</p>`)
  }

  function displayMaxTemp (temperature) {
    $('#max-temp').append(
      `<h4>Today's High:</h4> <p>${temperature} F°</p>`)
  }

  function convertToFahrenheit (kelvinUnits) {
    return  parseInt((kelvinUnits-273.15)*(9/5)+32)
  }

  function setTempFontColor (temperature) {
    if (temperature > 85) {
      $('#current-temp').css({
        color: "red"
      })
    }
    if (temperature < 40) {
      $('#current-temp').css({
        color: "blue"
      })
    }
  }

function refreshSearch () {
  $('#current-city').html('')
  $('#current-temp').html('')
  $('#description').html('')
  $('#min-temp').html('')
  $('#max-temp').html('')
}







})
