//key: bf110a4174b6a1b0710d8a1165f487ca

const cityInput = document.getElementById("city");
const getWeatherButton = document.getElementById("get-weather");

getWeatherButton.addEventListener("click", getWeatherInfo);
cityInput.addEventListener("keyup", enterPressed);

function enterPressed(event) {
  if (event.key === "Enter") {
    getWeatherInfo();
  }
}

function getWeatherInfo() {
  const api = "https://api.openweathermap.org/data/2.5/weather?q=";
  const cityName = cityInput.value.toLowerCase();
  const key = "&appid=bf110a4174b6a1b0710d8a1165f487ca";
  const units = "&units=metric";
  const url = api + cityName + key + units;
  console.log(url);

  if (cityInput.value === "") {
    getWeatherForCurrentLocation();
  } else {
    fetchData(url);
  }
  cityInput.value = "";
}

function fetchData(url) {
  fetch(url)
    .then(result => {
      //waiting for the result from the server
      if (result.ok) {
        return result.json(); //convert result to json
      } else {
        return alert("This is not correct city name");
      }
    })
    .then(data => {
      //call function with data we got in json file
      showWeatherInfo(data);
    });
}

function showWeatherInfo(data) {
  changeBackground(data);

  const arrayToStoreInLocalStorage = JSON.stringify(data.name);
  localStorage.setItem("city", arrayToStoreInLocalStorage);

  const weatherInfo = document.getElementById("weather-info");
  const cityName = document.getElementById("city-name");
  const temperature = document.getElementById("temperature");
  const humidity = document.getElementById("humidity");
  const windSpeed = document.getElementById("wind-speed");
  const sunrise = document.getElementById("sunrise");
  const sunset = document.getElementById("sunset");

  const weatherIcon = document.getElementById("weather-icon");
  weatherIcon.src =
    "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";

  const resultDescription = data.weather[0].description;
  const dateSunrise = new Date(data.sys.sunrise * 1000);
  const dateSunset = new Date(data.sys.sunset * 1000);

  weatherInfo.innerText = toTitleCase(resultDescription);

  temperature.innerHTML = Math.floor(data.main.temp) + "&#176;";
  windSpeed.innerHTML = "Wind speed: " + Math.floor(data.wind.speed) + " m/s";
  cityName.innerHTML = data.name;
  humidity.innerHTML = "Humidity: " + data.main.humidity + "%";
  sunrise.innerHTML = "Sunrise " + formatTime(dateSunrise);
  sunset.innerHTML = "Sunset " + formatTime(dateSunset);

  makeWeatherInfoVisible();
}

function changeBackground(data) {
  switch (data.weather[0].main) {
    case "Clear":
      document.body.style.backgroundImage = "url('images/clear_sky.jpg')";
      break;
    case "Clouds":
      document.body.style.backgroundImage = "url('images/cloudy.jpg')";
      break;
    case "Rain":
    case "Drizzle":
    case "Mist":
      document.body.style.backgroundImage = "url('images/rain.jpg')";
      break;
    case "Thunderstorm":
      document.body.style.backgroundImage = "url('images/storm.jpg')";
      break;
    case "Snow":
      document.body.style.backgroundImage = "url('images/snow.jpg')";
      break;
    default:
      document.body.style.backgroundImage = "url('images/main.jpg')";
  }
}

function makeWeatherInfoVisible() {
  const weatherContainer = document.querySelector(".weather-container");
  weatherContainer.style.visibility = "visible";
}

//your position
const buttonGetPosition = document.getElementById("get-position");
buttonGetPosition.addEventListener("click", getWeatherForCurrentLocation);

function getWeatherForCurrentLocation() {
  getCurrentLocation().then(coords => {
    const latitude = coords.latitude;
    const longitude = coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=bf110a4174b6a1b0710d8a1165f487ca&units=metric`;
    fetchData(url);
  });
}

function getCurrentLocation() {
  return new Promise(resolve => {
    navigator.geolocation.getCurrentPosition(function(position) {
      const coords = {latitude: position.coords.latitude, longitude: position.coords.longitude};
      resolve(coords);
    });
  });
}

//previous location
window.addEventListener("load", getWeatherForSavedPosition);

function getWeatherForSavedPosition() {
  const cityFromLocalStorage = JSON.parse(localStorage.getItem("city"));

  if (cityFromLocalStorage) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityFromLocalStorage}&appid=bf110a4174b6a1b0710d8a1165f487ca&units=metric`;
    fetchData(url);
  }
}

//utility functions
function toTitleCase(string) {
  return string
    .toLowerCase()
    .split(" ")
    .map(function(word) {
      return word.replace(word[0], word[0].toUpperCase());
    })
    .join(" ");
}

function formatTime(time) {
  return time.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}
