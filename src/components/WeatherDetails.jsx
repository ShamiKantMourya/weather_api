import React, {useContext} from 'react'
import { WeatherContext } from '../context/DataContext';

const WeatherDetails = () => {
  const {weatherData} = useContext(WeatherContext);
  return (
    <div>Weather</div>
  )
}

export default WeatherDetails;