const apiKey = "f4546b4d3b4c9bcad73fa2f374c07494";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric";

const button = document.querySelector("button");
const input = document.querySelector("input");
const weather = document.querySelector(".weather-icon");
async function checkWeather(city) {
  const response = await fetch(apiUrl + `&q=${city}` + `&appid=${apiKey}`);

  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
  } else {
    let data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

    switch (data.weather[0].main) {
      case "Rain":
        weather.src = "rain.png";
        break;

      case "Snow":
        weather.src = "snow.png";
        break;

      case "Wind":
        weather.src = "wind.png";
        break;

      case "Mist":
        weather.src = "mist.png";
        break;

      case "Humidity":
        weather.src = "rain.png";
        break;

      case "Drizzle":
        weather.src = "drizzle.png";
        break;

      case "Clouds":
        weather.src = "clouds.png";
        break;

      case "Clear":
        weather.src = "clear.png";
        break;

      default:
        // Handle the default case if none of the specific cases match
        break;
    }
    input.value = "";
    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }
}

// Add event listener using a function reference, not by calling the function
button.addEventListener("click", function () {
  checkWeather(input.value);
});
