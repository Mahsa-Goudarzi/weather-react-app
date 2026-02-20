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
      city: response.data.city,
      date: new Date(response.data.time * 1000),
      icon: response.data.condition.icon,
      temperature: Math.round(response.data.temperature.current),
      description: response.data.condition.description,
      humidity: response.data.temperature.humidity,
      wind: Math.round(response.data.wind.speed),
      coordinates: response.data.coordinates,
    });
  }

  function searchForCity() {
    const apiKey = "84e60bccf2t96649102abao4bf378f43";
    let units = "metric";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&units=${units}&key=${apiKey}`;
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
