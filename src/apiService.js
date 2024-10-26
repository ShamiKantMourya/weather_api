import axios from "axios";

const apiKey = process.env.REACT_APP_API_KEY;

export const apiCall = async (city) => {
  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    const res = await axios.get(url);
    // if (!res.ok) throw new Error("City weather location not available");
    if (res.status === 200) {
      return res.data;
    }
  } catch (error) {
    return error;
  }
};

