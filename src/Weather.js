import React, { useState } from "react";
import axios from "axios";
import Forecast from "./Forecast";
import Today from "./Today";

export default function Weather(props) {
  const [todayData, setTodayData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setTodayData({
      ready: true,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      icon: response.data.weather[0].icon,
      temperature: Math.round(response.data.main.temp),
      maxTemp: Math.round(response.data.main.temp_max),
      minTemp: Math.round(response.data.main.temp_min),
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: Math.round(response.data.wind.speed),
      coordinates: response.data.coord,
    });
  }

  function searchForCity() {
    const apiKey = "c8735bb7e8e2f8d8a38c7501f3cd47d3";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    searchForCity();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (todayData.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="input-group mb-3">
            <input
              type="search"
              className="form-control"
              placeholder="Enter the city"
              autoComplete="off"
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
              onChange={handleCityChange}
            />
            <button className="btn btn-primary" type="submit">
              <span className="d-none d-sm-block">Search</span>
              <span role="img" className="d-block d-sm-none">
                🔎
              </span>
            </button>
          </div>
        </form>
        <Today data={todayData} />
        <Forecast coordinates={todayData.coordinates} />
      </div>
    );
  } else {
    searchForCity();
    return <span>Loading...</span>;
  }
}
