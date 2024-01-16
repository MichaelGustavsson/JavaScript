import { state } from '../utilities/config.js';
import AppManager from '../App/AppManager.js';
import { createMovieListDisplay } from './domManager.js';

const initApp = () => {
  switch (state.currentPage) {
    case '/':
    case '/index.html':
      listPopularMovies();
      break;
    case '/movie-details.html':
      showMovieDetails();
      break;
  }
};

const listPopularMovies = async () => {
  const movies = await new AppManager().listMovies();

  movies.forEach((movie) => {
    const card = createMovieListDisplay(movie);
    document.querySelector('#top-movies').appendChild(card);
  });
};

const showMovieDetails = async () => {
  const movieId = location.search.split('=')[1];
  console.log(movieId);
  const movie = await new AppManager().findMovie(movieId);
  console.log(movie);
};

document.addEventListener('DOMContentLoaded', initApp);
