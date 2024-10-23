import WeatherDetails from "./components/WeatherDetails";
import WeatherImage from "./components/WeatherImage";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <div className="App">
      <main>
        <WeatherImage />
        <div className="background-dark"></div>
        <aside className="sideBar">
          <SearchBar />
          <p>Weather details.......</p>
          <div className="weather">
            <WeatherDetails />
          </div>
        </aside>
      </main>
    </div>
  );
}

export default App;
