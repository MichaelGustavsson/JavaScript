import { state } from '../utilities/config.js';
import AppManager from '../App/AppManager.js';

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
  console.log(movies);
};

const showMovieDetails = async () => {
  const movie = await new AppManager().findMovie(753342);
  console.log(movie);
};

document.addEventListener('DOMContentLoaded', initApp);
