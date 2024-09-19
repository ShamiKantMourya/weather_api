import axios from "axios";

const apiKey = process.env.REACT_APP_API_KEY;

export const apiCall = async (city) => {
  try {
    // console.log(typeof(apiKey), apiKey)
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    const res = await axios.get(url);
    if (res.status === 200) {
      return res.data;
    }
  } catch (error) {
    return error.message;
  }
};
