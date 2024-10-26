import { createContext, useEffect, useState } from "react";

import useUserLocation from "../hooks/useUserLocation";
import { apiCall } from "../apiService";
import axios from "axios";

const WeatherContext = createContext();
const apiKey = process.env.REACT_APP_API_KEY;

const WeatherProvider = ({ children, onError }) => {
  const [city, setCity] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const position = useUserLocation();

  useEffect(() => {
    if (position) {
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
      console.error("Location not found yet....");
    }
  }, [position]);

  const fetchWeatherData = async () => {
    try {
      const data = await apiCall(city);
      console.log(data.message, data.status, "data");
      if (data.status !== 404) {
        setWeatherData(data);
        setInputValue("");
        setErrorMessage("");
      } else {
        if (onError) onError();
        setErrorMessage("No city found with this name. Please refresh the page and try again");
      }
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };
  const contextValues = {
    city,
    setCity,
    errorMessage,
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
