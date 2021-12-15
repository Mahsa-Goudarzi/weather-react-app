import React from "react";
import FormatDate from "./FormatDate";
import Icon from "./Icon";
import "./Today.css";

export default function Today(props) {
  return (
    <div className="Today">
      <div className="row">
        <h2>{props.data.city}</h2>
        <h5>
          <FormatDate date={props.data.date} />
        </h5>
      </div>

      <div className="its-a-row">
        <div className="column">
          <Icon code={props.data.icon} size={60} />
        </div>
        <div className="column">
          <div>
            <span className="temperature">{props.data.temperature}</span>
            <span className="unit">°C</span>
          </div>
          <small>
            {props.data.maxTemp}°{" "}
            <span className="text-muted">{props.data.minTemp}°</span>
          </small>
        </div>

        <div className="column">
          <div className="text-capitalize">{props.data.description}</div>
          <div>Humidity: {props.data.humidity}%</div>
          <div>Wind: {props.data.wind} km/h</div>
        </div>
      </div>
    </div>
  );
}
