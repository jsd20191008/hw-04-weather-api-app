
let searchTerm = ""

// When the user clicks on the Submit button
// Fetch the weather based on the city name entered
// If an error occurs ask for valid input
$(document).ready(function () {
  $('#submit-btn').click((event) => {
    event.preventDefault();
    searchTerm = $('#city').val()

    fetchWeather(searchTerm)
  })

  // Reset button - runs resetMessage()
  $('#clear').click((event) => {
    searchTerm = ""
    resetMessage ()
  })

})

// Fetch Weather data using Open Weather App's v. 2.5 API  
async function fetchWeather (searchTerm) {
  try {
    const url = 'https://api.openweathermap.org/data/2.5/weather?q=' + searchTerm + '&units=imperial&appid=[YOUR_OPENWEATHER_API_KEY]'

    const response = await axios({
        url: url,
        method: 'GET',
      })

    console.log(response.data)
    displayMessage(response.data)
    
  } catch(error) {
    alert('error occurred - please enter a valid city name')
  }
}

// Changes the City Name, Current Temp, Description, Min and Max Temps
// On the Front End
function displayMessage (data) {
  $("#cityName").text(data.name)
  $("#currentTemp").text(`Currently ${data.main.temp}°F`)
  $("#weatherDesc").text(`Conditions: ${data.weather[0].description}`)
  $("#minTemp").text(`Min temp ${data.main.temp_min}°F`)
  $("#maxTemp").text(`Max temp ${data.main.temp_max}°F`)
}

// Resets the text, removes any weather data, removes value from input field
function resetMessage () {
  $('#city').val('');
  $("#cityName").text("City name")
  $("#currentTemp").text("Current temperature (F)")
  $("#weatherDesc").text("Weather description")
  $("#minTemp").text("Min temp")
  $("#maxTemp").text("Max temp")
}

