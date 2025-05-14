import React, { useState } from 'react';
import Weather from './Weather';
import './App.css';

function App() {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);

  const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
  console.log(apiKey);

  const fetchWeather = async () => {
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
    const data = await res.json();
    if (data.cod === 200) {
      setWeatherData(data);
    } else {
      alert("City not found");
      setWeatherData(null);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchWeather();
  };

  return (
    <div className="App">
      <h1>React Weather App</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={city}
          placeholder="Enter city"
          onChange={(e) => setCity(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      {weatherData && <Weather data={weatherData} />}
    </div>
  );
}

export default App;