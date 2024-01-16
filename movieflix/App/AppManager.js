import Movie from '../Models/Movie.js';
import HttpClient from '../lib/Http.js';

export default class AppManager {
  async listMovies() {
    try {
      const http = new HttpClient();
      const result = await http.get('movie/popular');

      // Loopa igenom resulatet och skapa ett nytt Movie
      // objekt för varje film...
      const movies = result.results.map((movie) => {
        return new Movie(
          movie.id,
          movie.title,
          movie.overview,
          movie.release_date,
          movie.poster_path
        );
      });

      return movies;
    } catch (error) {
      throw error;
    }
  }

  async findMovie(movieId) {
    try {
      const http = new HttpClient();
      const result = await http.get(`movie/${movieId}`);

      const movie = new Movie(
        result.id,
        result.title,
        result.overview,
        result.release_date,
        result.poster_path,
        result.backdrop_path,
        result.vote_average,
        result.genres
      );

      return movie;
    } catch (error) {
      throw error;
    }
  }
}
