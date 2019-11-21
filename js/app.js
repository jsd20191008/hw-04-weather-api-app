$(function () {
  $("#search").submit(() =>{
    event.preventDefault()


    console.log("submitting form")
    // read value from text field
    //store in query variable
    const query = $("#query").val()
    console.log(query)
    search(query)

  })

  function search(term){
    //this is where we make our api request
    console.log(`calling search with q=${term}`)
    const url = "https://api.openweathermap.org/data/2.5/weather"
    const apiKey = "b1fc5e5396249435c53ad57e7f01f7bf"

    jQuery.ajax({
      url: url,
      type: "GET",
      data: { q: term, api_key: apiKey}
  })
      .done((response) => {
      // execute this function if request is successful
      console.log(response)


      displayResults(response.data)
      })
      .fail((error) => {
        // execute this function if request fails
        console.log(error)
        alert('error occurred')
      })
    }

    function displayResults(city_weather){
      console.log("displaying city weather")
      console.log(city_weather)
    }
})
