const init = () => {
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

document.addEventListener('DOMContentLoaded', init);
