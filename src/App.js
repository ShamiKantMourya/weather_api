import WeatherDetails from "./components/WeatherDetails";
import WeatherImage from "./components/WeatherImage";
import SearchBar from "./components/SearchBar";

function App() {
  // console.log(weatherData, "weather data");
  // const { main } = weatherData;
  // console.log(main, "main")
  // const tempInCelcius = (main.temp - 32) / 1.8;
  // console.log(tempInCelcius, "temp in c");
  return (
    <div className="App">
      <main>
        {/* <WeatherImage /> */}
        <div className="background-dark"></div>
        <aside className="sideBar">
          <SearchBar />
          <div className="weather">
            {/* <WeatherDetails /> */}
          </div>
        </aside>
      </main>
    </div>
  );
}

export default App;
