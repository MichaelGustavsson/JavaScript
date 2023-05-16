import Http from '../lib/http.js';

class Weather {
  constructor(city, temp, humidity, wind, description) {
    this.city = city;
    this.temp = temp;
    this.humidity = humidity;
    this.wind = wind;
    this.description = description;
  }
}

export default Weather;
