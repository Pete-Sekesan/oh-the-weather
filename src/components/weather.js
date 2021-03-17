import React from "react";
import "./styles.css";
import moment from "moment";
import { Button } from "semantic-ui-react";

const refresh = () => {
  window.location.reload();
};

const WeatherCard = ({ weatherData }) => (
  <div className="main">
    <div className="top">
      <p className="header">{weatherData.name}</p>
      <Button
        className="button"
        inverted
        color="blue"
        circular
        icon="refresh"
        onClick={refresh}
      />
    </div>
    <div className="flex">
      <p className="day">
        {moment().format("dddd")}, <span>{moment().format("LL")}</span>
      </p>
      <p className="description">{weatherData.weather[0].main}</p>
    </div>

    <div className="flex">
      <p className="temp">High: {weatherData.main.temp_max} &deg;F</p>
      <p className="temp">Low: {weatherData.main.temp_min} &deg;F</p>
    </div>

    <div className="flex">
      <p className="temp">Current Temp: {weatherData.main.temp} &deg;F</p>
      <p className="temp">Humidity: {weatherData.main.humidity} %</p>
    </div>

    <div className="flex">
      <p className="sunrise-sunset">
        Sunrise:{" "}
        {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString("en-IN")}
      </p>
      <p className="sunrise-sunset">
        Sunset:{" "}
        {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString("en-IN")}
      </p>
    </div>
  </div>
);

export default WeatherCard;
