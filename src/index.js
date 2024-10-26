import React from "react";
import ReactDOM from "react-dom/client";

import { WeatherProvider } from "./context/DataContext";
import "./index.css";
import App from "./App";
import ErrorBoundary from "./components/ErrorBoundary";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <WeatherProvider>
        <App />
      </WeatherProvider>
    </ErrorBoundary>
  </React.StrictMode>
);
