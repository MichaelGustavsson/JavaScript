const generateHtml = (element, weather) => {
  const elem = document.querySelector(element);
  const html = `
    <h1 class="page-title">Vädret i ${weather.city} idag</h1>
    <section class="weather-info">
      <h3>Temperatur</h3>
      <p>${weather.temp}°</p>
      <h3>Vind</h3>
      <p>${weather.wind}ms</p>
      <h3>Fuktighet</h3>
      <p>${weather.humidity}%</p>
      <h3>Beskrivning</h3>
      <p>${weather.description}</p>
    </section>  
  `;

  elem.innerHTML = html;
};

export { generateHtml };
