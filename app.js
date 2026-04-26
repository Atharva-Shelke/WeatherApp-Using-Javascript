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

  resultDiv.innerHTML = `
    <h1>Weather in ${name},${sys.country}</h1>
    <h2>Temperature : ${main.temp} &deg;c</h2>
    <h3>Maximum : ${main.temp_max} &deg;c | Minimum : ${main.temp_min} &deg;c</h3>
    <h2>Sky Conditions : ${weather[0].main}-${weather[0].description}</h2>
  `;
};