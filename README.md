# Assignment 6: Weather Dashboard
The following application allows users to search for a city and learn about the weather conditions for that specific place from the weather results that are displayed

## User Story

```
AS A traveler
I WANT to see the weather outlook for multiple cities
SO THAT I can plan a trip accordingly
```

## Acceptance Criteria

```
GIVEN a weather dashboard with form inputs
WHEN I search for a city
THEN I am presented with current and future conditions for that city and that city is added to the search history
WHEN I view current weather conditions for that city
THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index
WHEN I view the UV index
THEN I am presented with a color that indicates whether the conditions are favorable, moderate, or severe
WHEN I view future weather conditions for that city
THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, and the humidity
WHEN I click on a city in the search history
THEN I am again presented with current and future conditions for that city
```

## Successes
* I was able to use the Openweather API to have a card with the weather conditions for a particular city be displayed on the page
* I was able to use moment to display the date and time
* The city name, the date, the temperature, the humidity, and the wind speed were displayed in the search results
* I was also able to get an icon representation of the weather conditions to be displayed along with the search results
* Afterwards, the city that was searched appends to the list of "searched cities" on the aside; when the page is refreshed they are still there
* When one of these cities is clicked, the weather results for this city are also displayed

## Bugs
* I was unable to have the UV index be displayed as it needed to access the co-ordinates for a particular location, and the co-ordinates of each city were contained within a single ajax call, so I was unsure how these results could be accessed globally
* I was unable to have the five–day forecast appear
* I was unable to have jQuery modify the BootStrap CSS "active" class so that when a city is clicked on in the aside, only that city is displayed in blue; whenever I tried to use jQuery to add or remove the class, then the buttons stopped working
* Although I used a Bootstrap framework, the site is not entirely mobile responsive when the screen size is reduced
* When the buttons initially are appended to the aside list of searched cities, they do not work; however, once the page is refreshed, they work, unless a new city is typed in and appended to the list

## Deployed links
* GitHub Repository: https://github.com/MG-cpu90/assignment6
* Deployed URL: https://mg-cpu90.github.io/assignment6/develop/index.html