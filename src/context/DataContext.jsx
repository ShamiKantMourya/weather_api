import { createContext, useEffect, useState } from "react";

import { apiCall } from "../apiService";

const WeatherContext = createContext();

const WeatherProvider = ({ children }) => {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [position, setPosition] = useState(null);

  useEffect(() => {
    const userLocationWeather = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (pos) => {
            setPosition({
              latitude: pos.coords.latitude,
              longitude: pos.coords.longitude,
            });
          },
          (error) => {
            console.error("Error getting location", error);
            alert("Error getting location: " + error.message);
          }
        );
      } else {
        prompt("Allow location to get your weather.....");
      }
    };

    userLocationWeather();
  }, []);

  if (position) {
  } else {
    console.log("Location is not available yet.");
  }

  const fetchWeatherData = async () => {
    try {
      const data = await apiCall(city);
      setWeatherData(data);
      console.log(data.main);
      setCity("");
      console.log(weatherData, "weater data");
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  const contextValues = {
    city,
    setCity,
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
