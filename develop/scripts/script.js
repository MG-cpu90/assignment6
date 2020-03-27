// Variables
var searchButton = $("#submit-button");
var form = $("#form");
var date = (".date");
var timeDateToday = moment().format('dddd, MMMM Do YYYY h:mm a').toString();
var citiesList = $(".featured-cities");
var forecastDay = $("#forecast-div");
var input = $("#form-input"); 
var searchedCities = [];

console.log(form);
console.log(searchedCities);

      const generateList = function() {
      // if this item exists in local storage, we will load it 
      // We will change the array to add contents in local storage
      if (localStorage.getItem("searchedCities")) {
        // if this exists, then execute this
        // in local storage you can only store strings, so you are using JSON.parse to change the string into an array
        searchedCities = JSON.parse(localStorage.getItem("searchedCities"));  
        }
      
        // or else do this
        else {
        // if there are no todos in local storage, then we set the "todos" to be an empty array
        // turn the array todos into a string to keep in local storage under the key todos
          localStorage.setItem("searchedCities", JSON.stringify(searchedCities));
        }
      };

      generateList();

      var createList = function() {
        citiesList.empty();
        for (j = 0; j < searchedCities.length; j++) {
          citiesList.append(
            `<li class="list-group-item active searched-Cities" id="${searchedCities[j]}">${searchedCities[j]}</li>`
          );
        }
      };
      
      createList();

// OnClick event for search button
searchButton.on("click", function(event) {
    event.preventDefault();
    var cityName = input[0].value; 
    
    var queryURL = "http://api.openweathermap.org/data/2.5/weather?q="+cityName+"&units=metric&uvi?&appid=95d304ea9130c998e905d74bc71292d7";
    
    console.log(input);
    console.log(cityName);
    console.log(searchButton);
    console.log(queryURL);
    console.log(citiesList);
  
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

        var iconCode = response.weather[0].icon;
        console.log(iconCode);
        var iconURL = "http://openweathermap.org/img/w/" + iconCode + ".png";
        console.log(iconURL);

        // city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index
        // Append results
        $(".city-name").html(response.name +  " Weather Details:");
        console.log(response.name + " Weather Details:");
        $(".date").html(timeDateToday);
        console.log(timeDateToday);
        $(".conditions").html("Conditions:  " + response.weather[0].main + "<img id='weather-icon' src='" + iconURL + "' alt='Weather icon'>");
        console.log(response.weather[0].main);
        console.log(iconURL);
        $(".wind").text("Wind Speed: " + response.wind.speed);
        console.log("Wind Speed: " + response.wind.speed);
        $(".humidity").text("Humidity: " + response.main.humidity);
        console.log("Humidity: " + response.main.humidity);
        $(".temp-C").html("Temperature (°C): " + response.main.temp);
        console.log("Temperature (°C): " + response.main.temp);
        });

      var citiesTemp = JSON.parse(localStorage.getItem("searchedCities"));
      citiesTemp.push(cityName);
        console.log(typeof citiesTemp);
        console.log(citiesTemp);

      localStorage.setItem("searchedCities", JSON.stringify(citiesTemp));
      
      generateList();
      createList();

  });
  
  // OnClick event for city buttons
  $(".searched-Cities").on("click", function(event) {
    event.preventDefault();
    console.log(event.target);
    cityText = $(event.target).attr("id");  
    console.log(cityText);
    var queryURL2 = "http://api.openweathermap.org/data/2.5/weather?q="+cityText+"&units=metric&uvi?&appid=95d304ea9130c998e905d74bc71292d7";
      
      // Performing an AJAX request with the queryURL2
      $.ajax({
        url: queryURL2,
        method: "GET",
        crossDomain: true,
        dataType: 'jsonp'
      })

        // After data comes back from the request
        .then(function(response) {
            console.log(queryURL2);
            console.log(response);
        var cityWeather = JSON.stringify(response);
            console.log(cityWeather);   
            
            var iconCode = response.weather[0].icon;
            console.log(iconCode);
            var iconURL = "http://openweathermap.org/img/w/" + iconCode + ".png";
            console.log(iconURL);

        // city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index
        // Append results
        $(".city-name").html(response.name +  " Weather Details:");
        console.log(response.name + " Weather Details:");
        $(".date").html(timeDateToday);
        console.log(timeDateToday);
        $(".conditions").html("Conditions:  " + response.weather[0].main + "<img id='weather-icon' src='" + iconURL + "' alt='Weather icon'>");
        console.log(response.weather[0].main);
        console.log(iconURL);
        $(".wind").text("Wind Speed: " + response.wind.speed);
        console.log("Wind Speed: " + response.wind.speed);
        $(".humidity").text("Humidity: " + response.main.humidity);
        console.log("Humidity: " + response.main.humidity);
        $(".temp-C").html("Temperature (°C): " + response.main.temp);
        console.log("Temperature (°C): " + response.main.temp);
        });

      generateList();
      createList();

    });

