// OpenWeather Map example response:
// {"coord":{"lon":-0.13,"lat":51.51},"weather":[{"id":300,"main":"Drizzle","description":"light intensity drizzle","icon":"09d"}],"base":"stations","main":{"temp":280.32,"pressure":1012,"humidity":81,"temp_min":279.15,"temp_max":281.15},"visibility":10000,"wind":{"speed":4.1,"deg":80},"clouds":{"all":90},"dt":1485789600,"sys":{"type":1,"id":5091,"message":0.0103,"country":"GB","sunrise":1485762037,"sunset":1485794875},"id":2643743,"name":"London","cod":200}
// Mine:
// {"coord":{"lon":127.1039,"lat":35.8008},"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04n"}],"base":"stations","main":{"temp":32.09,"feels_like":27.19,"temp_min":32.09,"temp_max":32.09,"pressure":1025,"humidity":89,"sea_level":1025,"grnd_level":1020},"visibility":10000,"wind":{"speed":4.99,"deg":331,"gust":11.14},"clouds":{"all":99},"dt":1707237215,"sys":{"country":"KR","sunrise":1707258467,"sunset":1707296614},"timezone":32400,"id":1845457,"name":"Jeonju","cod":200}

// Get the weather elements: "weatherIcon", "weatherTemperature", "weatherDescription".
const weatherIconElement = document.querySelector("#weatherIcon");
const weatherTemperatureElement1 = document.getElementById("weatherTemperature1");
const weatherTemperatureElement2 = document.querySelector("#weatherTemperature2");
const weatherDescriptionElement = document.getElementById("weatherDescription");

fetch("https://api.openweathermap.org/data/2.5/weather?lat=35.8008&lon=127.1039&appid=524e17b82fc57aa9f1269c29a9d885d3&lang=en&units=imperial") // This gives a response, which is named "fetchedResponse" in the next line.
// "Lang" is optional; "units" is optional but gives Kelvin temperature.  City-name searchers instead of lat/lon are possible.  https://openweathermap.org/current -> free: 1 current weather calls per 3 seconds per month, 1 call per 1 second at peak usage.
	.then((fetchedResponse) => fetchedResponse.json()) // This gives a JSON-formed response, named "fetchedData" in the next line.
	.then(fetchedJSONData => {
        const weatherIconCode = fetchedJSONData["weather"][0]["icon"];
        const weatherTemperature1 = fetchedJSONData.main.temp;
        const weatherTemperature2 = fetchedJSONData["main"]["feels_like"];
        const weatherDescription = fetchedJSONData.weather[0].description;
		const iconURL = `https://openweathermap.org/img/wn/${weatherIconCode}@2x.png`; // From: https://openweathermap.org/weather-conditions ; sizes are 2x and 4x.
		// const weatherIconElement = document.querySelector("#weatherIcon");
		// Set the source attribute of the <img> element to iconURL.
        weatherIconElement.setAttribute("src", iconURL);
        weatherTemperatureElement1.textContent = weatherTemperature1.toFixed(1);
        weatherTemperatureElement2.textContent = weatherTemperature2.toFixed(1);
        weatherDescriptionElement.textContent = weatherDescription;
    })
    .catch(errorMessage => {
		// Report the errors.
        weatherIconElement.alt = "Oh, sorry."; // ${errorMessage}`;
        weatherTemperatureElement1.textContent = "(Temperature unavailable)";
        weatherTemperatureElement2.textContent = "(Temperature unavailable)";
        weatherDescriptionElement.textContent = "(Weather unavailable)";
    });
