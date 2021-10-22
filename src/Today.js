import React from "react";
import "./Today.css";

export default function Today() {
  /*const [cityName, setCityName] = useState("");
  const [icon, setIcon] = useState("");
  const [temperature, setTemperature] = useState(null);
  const [maxTemp, setMaxTemp] = useState("");
  const [minTemp, setMinTemp] = useState("");
  const [description, setDescription] = useState("");
  const [humidity, setHumidity] = useState(null);
  const [wind, setWind] = useState(null);

  function fetchData(response) {
    setCityName(response.data.name);
    setIcon(
      `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    );
    setTemperature(Math.round(response.data.main.temp));
    setMaxTemp(`${Math.round(response.data.main.temp_max)}°`);
    setMinTemp(`${Math.round(response.data.main.temp_min)}°`);
    setDescription(response.data.weather[0].description);
    setHumidity(response.data.main.humidity);
    setWind(Math.round(response.data.wind.speed));
  }*/

  return (
    <div className="Today">
      <div className="row">
        <h2>Paris</h2>
        <h5>Tuesday 21:21</h5>
      </div>
      <div className="row">
        <div className="col-sm-4 col-4">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
            alt="sunny"
          />
        </div>
        <div className="col-sm-4 col-8">
          <div>
            <span className="temperature">16</span>{" "}
            <span className="unit">
              <a href="/">°C</a> |<a href="/">°F</a>
            </span>
          </div>
          <small>17° 13°</small>
        </div>

        <div className="col-sm-4 col">
          <div className="description">sunny</div>
          <div>Humidity: 10%</div>
          <div>Wind: 1 km/h</div>
        </div>
      </div>
    </div>
  );
}
