import React, { useContext, useEffect } from "react";
import { FaSearchLocation } from "react-icons/fa";

import { WeatherContext } from "../context/DataContext";
import "../css/search.css";

const SearchBar = () => {
  const {setCity, fetchWeatherData, setInputValue, inputValue } =
    useContext(WeatherContext);

  const debounceTime = 500;

  useEffect(() => {
    // This effect will run when the inputValue changes
    const timer = setTimeout(() => {
      // Update city state after the debounce time
      if (inputValue.trim() !== "") {
        setCity(inputValue);
      }
    }, debounceTime);

    return () => {
      // Cleanup: Clear the timer on unmount or when inputValue changes
      clearTimeout(timer);
    };
  }, [inputValue]); // Effect depends on inputValue

  const handleChange = (event) => {
    setInputValue(event.target.value); // Update the inputValue on change
  };
  return (
    <div className="search_bar">
      <input
        type="text"
        placeholder="Enter city name"
        value={inputValue}
        onChange={handleChange}
      />
      <FaSearchLocation onClick={fetchWeatherData} className="search_icon"/>
    </div>
  );
};

export default SearchBar;
