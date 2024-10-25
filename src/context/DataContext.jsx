import { createContext, useEffect, useState } from "react";

import useUserLocation from "../hooks/useUserLocation";
import { apiCall } from "../apiService";
import axios from "axios";

const WeatherContext = createContext();
const apiKey = process.env.REACT_APP_API_KEY;

const WeatherProvider = ({ children }) => {
  const [city, setCity] = useState("");
  const [inputValue, setInputValue] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const position = useUserLocation();

  useEffect(() => {
    if (position) {
      // console.log(position, "position");
      const { latitude, longitude } = position;
      const userLocationWeather = async () => {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`
        );
        if (response.status === 200) {
          setWeatherData(response.data);
        }
      };
      userLocationWeather();
    } else {
      console.error("Location not found yet....")
    }
  }, [position]);

  const fetchWeatherData = async () => {
    try {
      const data = await apiCall(city);
      setWeatherData(data);
      console.log(data.main);
      setInputValue("");
      // console.log(weatherData, "weater data");
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };
  const contextValues = {
    city,
    setCity,
    inputValue,
    setInputValue,
    weatherData,
    setWeatherData,
    fetchWeatherData,
  };
  return (
    <WeatherContext.Provider value={contextValues}>
      {children}
    </WeatherContext.Provider>
  );
};

export { WeatherContext, WeatherProvider };
