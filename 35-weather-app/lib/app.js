import Http from './http.js';
import { generateHtml } from './dom.js';

const buttonSearch = document.querySelector('#search-weather');
const cityInput = document.querySelector('#city');

const showWeather = async (city) => {
  const http = new Http();
  const weather = await http.getWeatherByCity(city);
  generateHtml('#display-weather', weather);
};

const handleSearchClick = () => {
  const city = cityInput.value;
  showWeather(city);
};

const handleSearch = (e) => {
  let city = 'Stenungsund';
  if (e.key === 'Enter') {
    if (e.target.value !== '') {
      city = e.target.value;
    }
  }
  showWeather(city);
};

buttonSearch.addEventListener('click', handleSearchClick);
cityInput.addEventListener('keyup', handleSearch);
showWeather('Varberg');
