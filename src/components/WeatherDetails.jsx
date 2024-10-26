import React, { useContext } from "react";
import { FaTemperatureHalf, FaDroplet } from "react-icons/fa6";

import { WeatherContext } from "../context/DataContext";
import "../css/weatherDetails.css";
import Loader from "./Loader";

const WeatherDetails = () => {
  const { weatherData } = useContext(WeatherContext);
  if(!weatherData){
    return <Loader />
  }
  const { main, weather} = weatherData;
  const weatherInfo = weather[0];
  const minTemp = (main.temp_min -  273.15).toFixed(2);
  const maxTemp = (main.temp_max -  273.15).toFixed(2);
  const pressure = (main.pressure * 0.0393701).toFixed(1);
  return (
    <div className="weather_details">
      <h3>{weatherInfo.description}</h3>
      <div className="weather-values">
      <p className="weather_description">
        Temp max <span className="detail">{maxTemp}°C <span className="hot_temp"><FaTemperatureHalf /></span></span>
      </p>
      <p className="weather_description">
        Temp min <span className="detail">{minTemp}°C <span className="cold_temp"><FaTemperatureHalf /></span></span>
      </p>
      <p className="weather_description">
        Pressure <span className="detail">{pressure} "Hg</span>
      </p>
      <p className="weather_description">
        Humidity <span className="detail">{main.humidity}% <span className="humidity"><FaDroplet /></span></span>
      </p>
      </div>
    </div>
  );
};

export default WeatherDetails;
