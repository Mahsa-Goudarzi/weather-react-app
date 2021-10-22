import React from "react";
import Forecast from "./Forecast";
import Today from "./Today";

export default function Search() {
  return (
    <div className="Search">
      <form>
        <div className="input-group mb-3">
          <input
            type="search"
            className="form-control"
            placeholder="Enter the city"
            autoComplete="off"
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
          />
          <button className="btn btn-primary" type="submit">
            <span className="d-none d-sm-block">Search</span>
            <span role="img" className="d-block d-sm-none">
              🔎
            </span>
          </button>
          <button className="btn btn-success" type="button">
            <span className="d-none d-sm-block">Current</span>
            <span role="img" className="d-block d-sm-none">
              📍
            </span>
          </button>
        </div>
      </form>
      <Today defaultCity="shiraz" />
      <Forecast />
    </div>
  );
}
