import React, { useState } from "react";
import axios from "axios";
import "./Today.css";

export default function Today(props) {
  const [todayData, setTodayData] = useState({ ready: false });

  function handleResponse(response) {
    setTodayData({
      city: response.data.name,
      iconSrc: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      temperature: Math.round(response.data.main.temp),
      maxTemp: `${Math.round(response.data.main.temp_max)}°`,
      minTemp: `${Math.round(response.data.main.temp_min)}°`,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: Math.round(response.data.wind.speed),
      ready: true,
    });
  }

  if (todayData.ready) {
    return (
      <div className="Today">
        <div className="row">
          <h2>{todayData.city}</h2>
          <h5>Tuesday 21:21</h5>
        </div>
        <div className="row">
          <div className="col-sm-4 col-4">
            <img src={todayData.iconSrc} alt={todayData.description} />
          </div>
          <div className="col-sm-4 col-8">
            <div>
              <span className="temperature">{todayData.temperature}</span>{" "}
              <span className="unit">
                <a href="/">°C</a> |<a href="/">°F</a>
              </span>
            </div>
            <small>
              {todayData.maxTemp}{" "}
              <span className="text-muted">{todayData.minTemp}</span>
            </small>
          </div>

          <div className="col-sm-4 col">
            <div className="text-capitalize">{todayData.description}</div>
            <div>Humidity: {todayData.humidity}%</div>
            <div>Wind: {todayData.wind} km/h</div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "c8735bb7e8e2f8d8a38c7501f3cd47d3";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&units=${units}&appid=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
    return <span>Loading...</span>;
  }
}
