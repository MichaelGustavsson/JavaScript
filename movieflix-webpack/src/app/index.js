import { fetchData } from './utils/https.js';
import '../assets/scss/main.scss';

const pageNumber = document.querySelector('#pageNo');
const pages = document.querySelector('#pages');
let criteria = '';

document.querySelector('#gotoFirst').addEventListener('click', onGotoFirstPageHandler);
document.querySelector('#gotoPrevious').addEventListener('click', onGotoPrevHandler);
document.querySelector('#gotoNext').addEventListener('click', onGotoNextPageHandler);
document.querySelector('#gotoLast').addEventListener('click', onGotoLastPageHandler);
document.querySelector('#searchForm').addEventListener('submit', onSearch);

let result;

const listPopularMovies = async (page = 1) => {
  if (criteria && criteria.length > 0) {
    result = await fetchData('search/movie', page, criteria);
  } else {
    result = await fetchData('movie/popular', page);
  }

  displayMovies(result.results);
  displayPagination(result);
};

const displayPagination = (data) => {
  const pages = data.total_pages > 500 ? 500 : data.total_pages;
  const currentPage = document.querySelector('#pageNo');
  const numOfPages = document.querySelector('#pages');
  currentPage.innerHTML = data.page;
  numOfPages.innerHTML = pages;
};

function onGotoFirstPageHandler() {
  listPopularMovies(1);
}

function onGotoPrevHandler() {
  let page = +pageNumber.innerHTML;
  page > 1 ? page-- : 1;
  listPopularMovies(page);
}

function onGotoNextPageHandler() {
  const numOfPages = +pages.innerHTML;
  let page = +pageNumber.innerHTML;
  page < numOfPages ? page++ : 500;
  listPopularMovies(page);
}

function onGotoLastPageHandler() {
  listPopularMovies(+pages.innerHTML);
}

function displayMovies(movies) {
  document.querySelector('#top-movies').innerHTML = '';
  movies.forEach((movie) => {
    const div = document.createElement('div');
    div.classList.add('card');

    div.innerHTML = `
      <a href="/movie-details.html?id=${movie.id}">
        ${movie.poster_path ? `<img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}"/>` : `<img src="./src/assets/images/No-Image.jpg" alt="${movie.title}" />`}
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
}

async function onSearch(e) {
  e.preventDefault();

  let page = 1;
  criteria = document.querySelector('#searchInput').value;

  if (criteria === '') {
    listPopularMovies();
    return;
  }

  const result = await fetchData('search/movie', page, criteria);

  displayPagination(result);
  displayMovies(result.results);
}

listPopularMovies();
