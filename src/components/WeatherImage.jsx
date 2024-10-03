import React,{useContext} from "react";
import { TiWeatherSunny, TiWeatherSnow, TiWeatherDownpour } from "react-icons/ti";

import { WeatherContext } from "../context/DataContext";

const WeatherImage = () => {
    const {weatherData} = useContext(WeatherContext);
    console.log(weatherData);
    const { main, name, weather} = weatherData;
    console.log(main,"maain")
    // const weatherInfo = weather[0];
    // const tempInCelcius = (main.temp - 32) * 5/9;
    // console.log(weatherInfo,"weather")
    const tempInCelcius = 20;
  return (
    <div className="imgContainer">
      <div className="imageBox">
      {tempInCelcius > 50 ? (
        <img src={`${process.env.PUBLIC_URL}/summer.jpg`} alt="Summer time" />
      ) : tempInCelcius >= 15 && tempInCelcius < 50 ? (
        <img src={`${process.env.PUBLIC_URL}/rain.jpg`} alt="Rainy time" />
      ) : (
        <img src={`${process.env.PUBLIC_URL}/winter.jpg`} alt="Winter time" />
      )}
      </div>
      <div className="tempbox-container">
      <h1 className="temp">{tempInCelcius}</h1>
      <div className="temp-info">
        <h2 className="temp-location">{name}</h2>
  
      </div>
      <div className="weather-logo"></div>
      </div>
    </div>
  );
};

export default WeatherImage;
