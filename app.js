import { getWeather } from "./api.js";

const button = document.getElementById("getWeather");
const resultDiv = document.getElementById("result");

button.addEventListener("click", async () => {
  const city = document.getElementById("cityInput").value;

  if (!city) {
    alert("Enter city");
    return;
  }

  try {
    const data = await getWeather(city);
    renderWeather(data);
  } catch (err) {
    resultDiv.innerHTML = "<p style='color: red'>" + err.message + "</p>"
  }
});

const renderWeather = (data) => {
  const { name, main, weather, sys } = data;

  const icon = getWeatherIcon(weather[0].main);

  resultDiv.innerHTML = `
    <h1>${icon} ${name}, ${sys.country}</h1>
    <h2>${main.temp} °C</h2>
    <h3>⬆ ${main.temp_max} °C &nbsp;&nbsp; ⬇ ${main.temp_min} °C</h3>
    <h3>${weather[0].main} - ${weather[0].description}</h3>
`;
};

const getWeatherIcon = (condition) => {
    switch (condition) {
        case "Clear":
            return "☀️";
        case "Clouds":
            return "☁️";
        case "Rain":
            return "🌧️";
        case "Drizzle":
            return "🌦️";
        case "Thunderstorm":
            return "⛈️";
        case "Snow":
            return "❄️";
        case "Mist":
        case "Fog":
        case "Haze":
            return "🌫️";
        default:
            return "🌍";
    }
};
