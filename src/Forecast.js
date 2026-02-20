import React, { useState, useEffect } from "react";
import axios from "axios";
import ForecastData from "./ForecastData";
import "./Forecast.css";

export default function Forecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForcast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  function showForecast(response) {
    setForcast(response.data.daily);
    setLoaded(true);
  }

  function load() {
    let apiKey = "84e60bccf2t96649102abao4bf378f43";
    let units = "metric";
    let latitude = props.coordinates.latitude;
    let longitude = props.coordinates.longitude;
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lat=${latitude}&lon=${longitude}&units=${units}&key=${apiKey}`;

    axios.get(apiUrl).then(showForecast);
  }

  if (loaded) {
    return (
      <div className="Forecast">
        <div className="row">
          {forecast.map(function (dailyForecast, index) {
            if (index > 0 && index < 6) {
              return (
                <div className="col" key={index}>
                  <ForecastData day={dailyForecast} />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    load();
    return null;
  }
}
