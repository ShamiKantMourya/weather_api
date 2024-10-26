import { useContext } from "react";
import {
  TiWeatherSunny,
  TiWeatherSnow,
  // TiWeatherDownpour,
  // TiWeatherStormy,
  TiWeatherPartlySunny,
  TiWeatherShower,
  TiWeatherCloudy,
  TiWeatherWindyCloudy,
} from "react-icons/ti";

import { WeatherContext } from "../context/DataContext";
import Loader from "../animation/Loader";

const WeatherLogo = () => {
  const { weatherData } = useContext(WeatherContext);

  if (!weatherData) {
    return <Loader />;
  }

  const { weather } = weatherData;
  const weatherInfo = weather[0];
  const logo = () => {
    switch (weatherInfo.main) {
      case "Mist":
        return <TiWeatherWindyCloudy />;
        break;
      case "Haze":
        return <TiWeatherSnow />;
        break;
      case "Clouds":
        return <TiWeatherCloudy />;
        break;
      case "Rain":
        return <TiWeatherShower />;
        break;
      case "Clear":
        return <TiWeatherSunny />;
        break;
      default:
        return <TiWeatherPartlySunny />;
        break;
    }
  };
  return (
    <>
      <div className="Weather_logo">{logo()}</div>
    </>
  );
};

export default WeatherLogo;
