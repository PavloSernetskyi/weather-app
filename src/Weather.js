import React from 'react';

function Weather({ data }) {
  return (
    <div className="weather-box">
      <h2>{data.name}</h2>
      <p>{data.weather[0].description}</p>
      <p>🌡 Temp: {data.main.temp}°C</p>
      <p>💧 Humidity: {data.main.humidity}%</p>
      <p>🌬 Wind: {data.wind.speed} m/s</p>
    </div>
  );
}

export default Weather;
