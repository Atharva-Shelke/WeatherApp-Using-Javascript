import { CONFIG } from "./config.js";

export const getWeather = async (city) => {

  if (CONFIG.USE_LOCAL) {
    const response = await fetch("./mock.json");
    return await response.json();
  }

  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${CONFIG.API_KEY}&units=metric`
  );

  const data = await response.json();

  if (data.cod != "200") {
    throw new Error(data.message);
  }

  return data;
};