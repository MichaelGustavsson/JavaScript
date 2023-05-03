import state from './state.js';
import { listPopularMovies, showMovieDetails } from './movies.js';

const route = () => {
  switch (state.currrentPage) {
    case '/':
    case '/index.html':
      listPopularMovies();
      break;
    case '/movie-details.html':
      showMovieDetails();
      break;
  }
};

export default route;

// document.addEventListener('DOMContentLoaded', init);
