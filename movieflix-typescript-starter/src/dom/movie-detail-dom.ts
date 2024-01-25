import { Movie } from '../models/MovieModel.js';
import { getMovie } from '../services/movie-detail.js';

function initApp() {
  findMovie();
}

async function findMovie(): Promise<void> {
  const id = location.search.split('=')[1];
  // const result = await getMovie(parseInt(id))
  const result = await getMovie(+id);
  console.log(result);
  console.log(result.results);
  // const test = result as unknown;
  // const movie = test as Movie;
  const movie = result as unknown as Movie;
  console.log(movie);
}

document.addEventListener('DOMContentLoaded', initApp);
