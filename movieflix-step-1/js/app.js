const state = {
  currrentPage: window.location.pathname,
};

const listPopularMovies = async () => {
  const url = 'https://api.themoviedb.org/3/movie/popular';
  const api_key = 'b6db108c656743b50fe39afcc3bffcc7';

  const response = await fetch(`${url}?api_key=${api_key}&language=sv-SE`);

  const { results } = await response.json();
  console.log(results);

  results.forEach((movie) => {
    const div = document.createElement('div');
    div.classList.add('card');

    div.innerHTML = `
      <a href="/movie-details.html?id=${movie.id}">
        <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="Movie Titel"/>
      </a>
      <div class="card-body">
        <h5 class="card-title">${movie.title}</h5>
        <p class="card-text">
          <small class="text-muted">Premiär datum: ${movie.release_date}</small>
        </p>
      </div>
    `;

    document.querySelector('#top-movies').appendChild(div);
  });
};

const showMovieDetails = async () => {
  const url = 'https://api.themoviedb.org/3/movie/';
  const api_key = 'b6db108c656743b50fe39afcc3bffcc7';

  const movieId = window.location.search.split('=')[1];

  const response = await fetch(
    `${url}${movieId}?api_key=${api_key}&language=sv-SE`
  );
  const movie = await response.json();

  console.log(movie);

  const overlayDiv = document.createElement('div');
  overlayDiv.style.backgroundImage = `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`;
  overlayDiv.style.backgroundSize = 'cover';
  overlayDiv.style.backgroundPosition = 'center';
  overlayDiv.style.backgroundRepeat = 'no-repeat';
  overlayDiv.style.height = '100vh';
  overlayDiv.style.width = '100vw';
  overlayDiv.style.position = 'absolute';
  overlayDiv.style.top = '0';
  overlayDiv.style.left = '0';
  overlayDiv.style.zIndex = '-1';
  overlayDiv.style.opacity = '0.3';

  document.querySelector('#movie-details').appendChild(overlayDiv);

  const div = document.createElement('div');
  div.innerHTML = `
    <div class="details-top">
            <div>${
              movie.poster_path
                ? `<img src="https://image.tmdb.org/t/p/w500${movie.poster_path}"
                  class="card-img-top" alt="${movie.title}"/>`
                : `img src="../images/no-image.jpg"
                  class="card-img-top" alt="${movie.title}"/>`
            }</div>
            <div>
              <h2>${movie.title}</h2>
              <p>
                <i class="fas fa-star rating"></i>
                ${movie.vote_average.toFixed(1)} / 10
              </p>
              <p class="text-muted">Premiär: ${movie.release_date}</p>
              <p>${movie.overview}</p>
              <h5>Genre</h5>
              <ul>
                ${movie.genres
                  .map((genre) => `<li>${genre.name}</li>`)
                  .join('')}
              </ul>
            </div>
          </div>
  `;

  document.querySelector('#movie-details').appendChild(div);
};

const init = () => {
  switch (state.currrentPage) {
    case '/':
    case '/index.html':
      console.log(state.currrentPage);
      listPopularMovies();
      break;
    case '/movie-details.html':
      console.log(state.currrentPage);
      showMovieDetails();
      break;
  }
};

document.addEventListener('DOMContentLoaded', init);
