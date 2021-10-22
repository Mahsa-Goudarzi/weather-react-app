import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="weather-container">
        <Weather defaultCity="Paris" />
      </div>

      <footer>
        <small>
          <a
            href="https://github.com/Mahsa-Goudarzi/weather-react-app"
            target="_blank"
            rel="noreferrer"
          >
            Open-source coded
          </a>{" "}
          by Mahsa Goudarzi,{" "}
          <a
            href="https://heuristic-heisenberg-cbb445.netlify.app"
            target="_blank"
            rel="noreferrer"
          >
            hosted on Netlify
          </a>{" "}
        </small>
      </footer>
    </div>
  );
}
