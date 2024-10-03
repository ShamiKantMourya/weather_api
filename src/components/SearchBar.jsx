import React, { useContext } from "react";
import { FaSearchLocation } from "react-icons/fa";

import { WeatherContext } from "../context/DataContext";

const SearchBar = () => {
  const { city, setCity, fetchWeatherData } = useContext(WeatherContext);
  return (
    <div className="search_bar">
      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <FaSearchLocation onClick={fetchWeatherData} />
    </div>
  );
};

export default SearchBar;
