const state = {
  currentPage: window.location.pathname,
};

const listPopularMovies = async () => {
  const url = 'https://api.themoviedb.org/3/movie/popular';
  const api_key = '85c79451d43f6c5bb6470c9006901589';

  const response = await fetch(`${url}?api_key=${api_key}&language=sv-SE`);
  const { results } = await response.json();

  results.forEach((movie) => {
    const div = document.createElement('div');
    div.classList.add('card');

    div.innerHTML = `
      <a href="/movie-details.html?id=${movie.id}">
        <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}"/>
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
  const api_key = '85c79451d43f6c5bb6470c9006901589';

  const movieId = window.location.search.split('=')[1];

  const response = await fetch(
    `${url}${movieId}?api_key=${api_key}&language=sv-SE`
  );
  const movie = await response.json();

  console.log(movie);

  const overlayDiv = document.createElement('div');

  document.querySelector('#movie-details').appendChild(overlayDiv);

  overlayDiv.style.backgroundImage = `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`;
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

  const div = document.createElement('div');

  div.innerHTML = `
    <div class="details-top">
      <div>${
        movie.poster_path
          ? `<img src="https://image.tmdb.org/t/p/w500${movie.poster_path}"
              class="card-img-top" alt="${movie.title}"/>`
          : `<img src="../assets/images/no-image.jpg"
            class="card-img-top" alt="${movie.title}"/>`
      }
      </div>
      <section>
        <h2>${movie.title}</h2>
        <p>
          <i class="fas fa-star rating"></i>
          ${movie.vote_average.toFixed(1)} / 10
        </p>
        <p class="text-muted">Premiär: ${movie.release_date}</p>
        <p>${movie.overview}</p>
        <h5>Genre</h5>
        <ul>
          ${movie.genres.map((genre) => `<li>${genre.name}</li>`).join('')}
        </ul>
      </section>
    </div>
  `;

  document.querySelector('#movie-details').appendChild(div);
};

const init = () => {
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

document.addEventListener('DOMContentLoaded', init);
