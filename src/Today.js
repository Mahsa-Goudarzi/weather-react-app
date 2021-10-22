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
      <div className="row">
        <div className="col-sm-4 col-4">
          <Icon code={props.data.icon} />
        </div>
        <div className="col-sm-4 col-8">
          <div>
            <span className="temperature">{props.data.temperature}</span>{" "}
            <span className="unit">
              <a href="/">°C</a> |<a href="/">°F</a>
            </span>
          </div>
          <small>
            {props.data.maxTemp}{" "}
            <span className="text-muted">{props.data.minTemp}</span>
          </small>
        </div>

        <div className="col-sm-4 col">
          <div className="text-capitalize">{props.data.description}</div>
          <div>Humidity: {props.data.humidity}%</div>
          <div>Wind: {props.data.wind} km/h</div>
        </div>
      </div>
    </div>
  );
}
