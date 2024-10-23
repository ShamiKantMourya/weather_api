import React, { useContext } from "react";
import { WeatherContext } from "../context/DataContext";

const WeatherDetails = () => {
  const { weatherData } = useContext(WeatherContext);
  const { main, name, weather} = weatherData;
  const weatherInfo = weather[0];
  console.log(main,"main")
  console.log(weatherInfo, "weather info");
  console.log(weatherData, "weather data");
  return (
    <div>
      <h3>{weatherInfo.description}</h3>
      <p>
        Temp max <span>{main.temp_max}</span>
      </p>
    </div>
  );
};

export default WeatherDetails;
