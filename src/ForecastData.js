import React from "react";
import Icon from "./Icon";
import "./ForecastData.css";

export default function ForecastData(props) {
  function maxTemperature() {
    let temperature = Math.round(props.day.temperature.maximum);
    return temperature;
  }

  function minTemperature() {
    let temperature = Math.round(props.day.temperature.minimum);
    return temperature;
  }

  function day() {
    let date = new Date(props.day.time * 1000);
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let day = days[date.getDay()];
    return day;
  }

  return (
    <div className="ForecastData">
      <div>{day()}</div>
      <Icon code={props.day.condition.icon} size={35} />
      <div>
        <small>
          {maxTemperature()}°{" "}
          <span className="text-muted">{minTemperature()}°</span>
        </small>
      </div>
    </div>
  );
}
