import { settings } from './config.js';
import Weather from '../Models/Weather.js';

class Http {
  async getWeatherByCity(city) {
    const apiKey = settings.api_key;
    const url = `${settings.baseUrl}${city}&appid=${apiKey}&units=metric&lang=se`;

    const response = await fetch(url);

    if (response.status === 200) {
      const data = await response.json();

      const weather = new Weather(
        data.name,
        data.main.temp,
        data.main.humidity,
        data.wind.speed,
        data.weather[0].description
      );

      return weather;
    }
  }
}

export default Http;
