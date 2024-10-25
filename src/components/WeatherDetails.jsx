import React, { useContext } from "react";
import { FaTemperatureHalf, FaDroplet } from "react-icons/fa6";

import { WeatherContext } from "../context/DataContext";
import "../css/weatherDetails.css";

const WeatherDetails = () => {
  const { weatherData } = useContext(WeatherContext);
  if(!weatherData){
    return "Loading the data...."
  }
  const { main, weather} = weatherData;
  const weatherInfo = weather[0];
  const minTemp = (main.temp_min -  273.15).toFixed(2);
  const maxTemp = (main.temp_max -  273.15).toFixed(2);
  return (
    <div>
      <h3>{weatherInfo.description}</h3>
      <div>
      <p className="weather_description">
        Temp max <span className="detail">{maxTemp}°C</span><span className="hot_temp"><FaTemperatureHalf /></span>
      </p>
      <p className="weather_description">
        Temp min <span className="detail">{minTemp}°C</span><span className="cold_temp"><FaTemperatureHalf /></span>
      </p>
      <p className="weather_description">
        Pressure <span className="detail">{main.pressure}</span>
      </p>
      <p className="weather_description">
        Humidity <span className="detail">{main.humidity}%</span><span className="humidity"><FaDroplet /></span>
      </p>
      </div>
    </div>
  );
};

export default WeatherDetails;
