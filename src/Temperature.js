import React, { useState } from "react";
import "./Temperature.css";

export default function Temperature(props) {
  const [unit, setUnit] = useState("celsius");
  function convertToCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function convertToFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  if (unit === "celsius") {
    return (
      <div className="Temperature">
        <div>
          <span className="temperature">{props.temperature}</span>{" "}
          <span className="unit">
            °C |
            <a href="/" onClick={convertToFahrenheit}>
              °F
            </a>
          </span>
        </div>
        <small>
          {props.maxTemp}° <span className="text-muted">{props.minTemp}°</span>
        </small>
      </div>
    );
  } else {
    return (
      <div className="Temperature">
        <div>
          <span className="temperature">
            {Math.round(props.temperature * 1.8 + 32)}
          </span>{" "}
          <span className="unit">
            <a href="/" onClick={convertToCelsius}>
              °C
            </a>{" "}
            | °F
          </span>
        </div>
        <small>
          {Math.round(props.maxTemp * 1.8 + 32)}°{" "}
          <span className="text-muted">
            {Math.round(props.minTemp * 1.8 + 32)}°
          </span>
        </small>
      </div>
    );
  }
}
