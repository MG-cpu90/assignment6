// Variables
var searchButton = $("#submit-button");
var form = $("#form");

var forecastFiveDay = $("#five-day-forecast-div");
console.log(form);

searchButton.on("click", function(event) {
    event.preventDefault();

    var input = $("#form-input"); 
    var cityName = input[0].value; 
    var queryURL = "api.openweathermap.org/data/2.5/weather?q="+cityName+"&units=metric&appid=95d304ea9130c998e905d74bc71292d7";

    console.log(input);
    console.log(cityName);
    console.log(searchButton);

      // Performing an AJAX request with the queryURL
      $.ajax({
        url: queryURL,
        method: "GET",
        crossDomain: true,
        dataType: 'jsonp'
      })
        // After data comes back from the request
        .then(function(response) {
            console.log(queryURL);
            console.log(response);
        var cityWeather = JSON.stringify(response);
            console.log(cityWeather);      

        // city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index

        // Append results
        $(".city").html("<h1>" + response.name + " Weather Details" + "</h1>");
        console.log(response.name + " Weather Details");
        // $(".date").html("<h1>" + response.name + " Weather Details</h1>");
        $(".conditions").html("Conditions:  " + response.weather);
        console.log("Conditions:  " + response.weather);
        $(".wind").text("Wind Speed: " + response.wind.speed);
        console.log("Wind Speed: " + response.wind.speed);
        $(".humidity").text("Humidity: " + response.main.humidity);
        console.log("Humidity: " + response.main.humidity);
        $(".temp-C").html("Temperature (°C): " + response.name);
        console.log("Temperature (°C): " + response.name);

        });
  });