const listPopularMovies = async () => {
  const { results } = await fetchData('movie/popular');
  displayMovies('#top-movies', results);
};

const showMovieDetails = async () => {
  const movieId = window.location.search.split('=')[1];
  const movie = await fetchData(`movie/${movieId}`);
  displayMovieDetails('#movie-details', movie);
  displayBackgroundImage('#movie-details', movie.backdrop_path);
};
