import HttpClient from '../lib/http.js';

export default class AppManager {
  async listMovies() {
    try {
      const http = new HttpClient();
      const result = await http.get('movie/popular');

      return result.results;
    } catch (error) {
      throw error;
    }
  }

  async findMovie(movieId) {
    try {
      // Skapa ett objekt av typen HttpClient...
      const http = new HttpClient();
      // Anropa get metoden på objektet http
      // Skicka med resursen = '/movie/movieId'...
      const result = await http.get(`movie/${movieId}`);
      return result;
    } catch (error) {
      throw error;
    }
  }
}
