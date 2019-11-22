
/*
Add a input box to enter city name apply a submit button on the page when user inputs city make sure a function calls openweather api.

when city is entered display results should include city name, current temp, weather description, min temp,max temp.

Once city is picked results should display but also change when adding an if statement to check if the weather is either above 85 degree or below 40.*/
$(function () {
  $('#search').click(() => {
      event.preventDefault()
      //console.log('button works')
      const city = $('#city-type').val()

        })
          function seachCity(searchterm) {

            // note added async to function

            async function getWeather (searchTerm) {
              try {
                const url = 'http://api.openweathermap.org/data/2.5/weather?q=London,uk'
                const apiKey = 'f674d7dcd4f4a4860d1b6eede3761c6c'

                // open openWeather api
                const response = await axios({
                    url: url,
                    type: 'GET'
                  })

                    console.log(responseWeather)

                      // pass array as function
                      displayResults(responseWeather.data)

                    } catch(error) {
                      alert('error try another city')
                    }
                    }

                    function displayMessage(data) {
                    $('#cityName').text(data.name)
                    $('#currentTemp').text(`Outside ${city.main.temp}°F`)
                    $('#weatherDesc').text(`Conditions: ${data.weather[0].description}`)
                    $('#minTemp').text(`min temp ${data.main.temp_min}°F`)
                    $('#maxTemp').text(`max temp ${data.main.temo_max}°F`)
                      }

                    //adding jquery to update the UI
                    $('#city').val('')
                    $('#cityName').text('city name')
                    $('#temp').text('cityTemp')
                    $('#description').text('cityDescription')
                    $('#temp_Min').text('cityTempMin')
                    $('#temp_Max').text('cityTempMax')
                      }
                    })

                        // make API request using #.ajax()
                         //    $.ajax({
                         //        url: 'url',
                         //        type: 'GET',
                         //        data: { q: searchTerm}
                         //
                         //    })
                         //    .done((response) => {
                         //        console.log(response)
                         //        // get response from successful API call and
                         //        // pass response data to the updateUi() function
                         //        displayResults(response)
                         //    })
                         //    .fail((error) => {
                         //        console.log(error)
                         //        alert('an error occurred')
                         //    })
                         // }
