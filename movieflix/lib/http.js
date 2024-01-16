import { settings } from '../utilities/config.js';

export default class HttpClient {
  // Skapa en metod som kan hämta baserat på url'en som skickas in...
  async get(resource) {
    try {
      const baseUrl = `${settings.BASE_URL}/${resource}`;
      const url = `${baseUrl}?api_key=${settings.API_KEY}&language=sv-SE`;
      const response = await fetch(url);

      if (response.ok) {
        // Plocka ut datat ur svarets body egenskap och
        // gör om det till json
        const data = await response.json();
        return data;
      } else {
        throw new Error(`Det gick fel när vi skulle hämta data, 
        ${response.status} - ${response.statusText}`);
      }
    } catch (error) {
      throw new Error(error.message);
    }
  }
}
