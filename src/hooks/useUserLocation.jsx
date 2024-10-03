import { useState, useEffect } from "react";


const useUserLocation = () => {
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

      return position;
};

export default useUserLocation;
