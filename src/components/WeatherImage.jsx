import React,{useContext} from "react";
import  useDate from "../hooks/useDate";
// import { TiWeatherSunny, TiWeatherSnow, TiWeatherDownpour } from "react-icons/ti";

import { WeatherContext } from "../context/DataContext";

const WeatherImage = () => {
    const {weatherData} = useContext(WeatherContext);
    
    const dateTime = useDate();
    // console.log(dateTime.date, dateTime.time,"date time")

    if (!weatherData) {
      return <div>Loading weather data...</div>;
    };

    const { main, name, weather} = weatherData;
    console.log(main, weather, name, "data received");
    const weatherInfo = weather[0];
    const tempInCelcius = (main.temp -  273.15).toFixed(2);
    console.log(weatherInfo,"weather")
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
        <div>
          <p>{dateTime.date}</p>
          <p>{dateTime.time}</p>
        </div>
      </div>
      <div className="weather-logo"></div>
      </div>
    </div>
  );
};

export default WeatherImage;
