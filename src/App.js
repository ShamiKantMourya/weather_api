import WeatherDetails from "./components/WeatherDetails";
import WeatherImage from "./components/WeatherImage";
import SearchBar from "./components/SearchBar";
import "./css/app.css";

function App() {
  return (
      <main className="App">
        <WeatherImage />
        {/* <div className="background-dark"></div> */}
        <aside className="sideBar">
          <SearchBar />
          <p>Weather details.......</p>
          <div className="weather">
            <WeatherDetails />
          </div>
        </aside>
      </main>
  );
}

export default App;
