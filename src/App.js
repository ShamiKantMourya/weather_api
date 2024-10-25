import WeatherDetails from "./components/WeatherDetails";
import WeatherImage from "./components/WeatherImage";
import SearchBar from "./components/SearchBar";
import "./css/app.css";

function App() {
  return (
    <div className="App">
      <main className="main_body">
        <WeatherImage />
      </main>
      {/* <div className="background-dark"></div> */}
      <aside className="sideBar">
        <SearchBar />
        <p>Weather details.......</p>
        <hr></hr>
        <div className="weather">
          <WeatherDetails />
        </div>
      </aside>
    </div>
  );
}

export default App;
