import React, { useContext } from "react";

import useDate from "../hooks/useDate";
import { WeatherContext } from "../context/DataContext";
import WeatherLogo from "./WeatherLogo";
import "../css/weatherImage.css";
import Loader from "../animation/Loader";

const WeatherImage = () => {
  const { weatherData, errorMessage } = useContext(WeatherContext);
  // console.log(errorMessage, "errorMessage")

  const dateTime = useDate();

  if (!weatherData) {
    return <Loader />;
  }

  const { main, name, weather } = weatherData;
  console.log(main, weather, name, "data received");
  const tempInCelcius = (main.temp - 273.15).toFixed(2);
  return (
    <>
      {errorMessage ? (
        <p>{alert(errorMessage)}</p>
      ) : (
        weatherData && (
          <div className="imgContainer">
            <div className="imageBox">
              {tempInCelcius > 50 ? (
                <img
                  src={`${process.env.PUBLIC_URL}/summer.jpg`}
                  alt="Summer time"
                />
              ) : tempInCelcius >= 15 && tempInCelcius < 50 ? (
                <img
                  src={`${process.env.PUBLIC_URL}/rain.jpg`}
                  alt="Rainy time"
                />
              ) : (
                <img
                  src={`${process.env.PUBLIC_URL}/winter.jpg`}
                  alt="Winter time"
                />
              )}
            </div>
            <div className="tempbox-container">
              <h1 className="temp">{tempInCelcius}°C</h1>
              <div className="temp-info">
                <h2 className="temp-location">{name}</h2>
                <div className="date-time">
                  <p>{dateTime.date}</p>
                  <p>{dateTime.time}</p>
                </div>
              </div>
              <div className="weather-logo">
                <WeatherLogo />
              </div>
            </div>
          </div>
        )
      )}
    </>
  );
};

export default WeatherImage;
