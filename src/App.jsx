import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [weatherData, setWeatherData] = useState([]);

  useEffect(() => {
    // Fetch data from WeatherForecast API
    axios.get('http://localhost:5105/WeatherForecast')
      .then(response => {
        setWeatherData(response.data);
        console.log(response.data)
      })
      .catch(error => {
        console.error('There was an error fetching the weather data!', error);
      });
  }, []);

  return (
    <div>
      <h1>Weather Forecast</h1>
      <div>
        {weatherData.length > 0 ? (
          weatherData.map((forecast, index) => (
            <div key={index} className="weather-card">
              <p><strong>Date:</strong> {forecast.date}</p>
              <p><strong>Temperature:</strong> {forecast.temperatureC}°C / {forecast.temperatureF}°F</p>
              <p><strong>Summary:</strong> {forecast.summary}</p>
            </div>
          ))
        ) : (
          <p>Loading weather data...</p>
        )}
      </div>
    </div>
  );
}

export default App;
