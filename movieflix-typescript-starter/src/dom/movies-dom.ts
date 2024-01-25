import { Movie } from '../models/MovieModel.js';
import { ResponseModel } from '../models/ResponseModel.js';
import { listAllMovies, searchMovies } from '../services/movies.js';

document
  .querySelector<HTMLFormElement>('#searchForm')!
  .addEventListener('submit', onSearch);

document
  .querySelector<HTMLSpanElement>('#gotoFirst')!
  .addEventListener('click', onGotoFirstPageHandler);
document
  .querySelector<HTMLSpanElement>('#gotoPrevious')!
  .addEventListener('click', onGotoPrevPageHandler);
document
  .querySelector<HTMLSpanElement>('#gotoNext')!
  .addEventListener('click', onGotoNextPageHandler);
document
  .querySelector<HTMLSpanElement>('#gotoLast')!
  .addEventListener('click', onGotoLastPageHandler);

// Hämta referens till pages och pageNumber
const pageNumber = document.querySelector<HTMLSpanElement>('#pageNo');
const pages = document.querySelector<HTMLSpanElement>('#pages');

function initApp() {
  listMovies();
}

async function listMovies(page: number = 1) {
  let result: ResponseModel;
  let query: string =
    document.querySelector<HTMLInputElement>('#searchInput')!.value;

  if (query) {
    result = await searchMovies(query, page);
  } else {
    result = await listAllMovies(page);
  }

  displayMovies(result.results as [Movie]);
  displayPagination(result);
}

async function onSearch(e: SubmitEvent): Promise<void> {
  e.preventDefault();
  listMovies(1);
}

function displayMovies(movies: [Movie]): void {
  const app = document.querySelector('#top-movies') as HTMLDivElement;
  app.innerHTML = '';

  for (let movie of movies) {
    const div = document.createElement('div');
    const imageAnchor = document.createElement('a');
    const image = document.createElement('img');
    const cardBody = document.createElement('div');
    const heading = document.createElement('h5');
    const p = document.createElement('p');
    const small = document.createElement('small');

    div.classList.add('card');
    imageAnchor.href = `./movie-details.html?id=${movie.id}`;
    image.alt = `alt=${movie.title}`;
    image.src = movie.poster_path
      ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
      : '../dist/assets/images/No-Image.jpg';
    imageAnchor.appendChild(image);
    div.appendChild(imageAnchor);

    cardBody.classList.add('card-body');
    heading.classList.add('card-title');
    heading.textContent = movie.title;

    p.classList.add('card-text');
    p.classList.add('text-muted');
    small.textContent = `Premiär datum: ${movie.release_date}`;
    p.appendChild(small);

    cardBody.appendChild(heading);
    cardBody.appendChild(p);
    div.appendChild(cardBody);
    app.appendChild(div);
  }
}

function displayPagination(data: ResponseModel): void {
  // Läs in antalet sidor ifrån resultatet...
  const pages = data.total_pages > 500 ? 500 : data.total_pages;
  // Ta reda på aktuell sida som visas...
  const currentPage = document.querySelector<HTMLSpanElement>('#pageNo')!;
  const numOfPages = document.querySelector<HTMLSpanElement>('#pages')!;

  // Updatera sidan med aktuell information...
  currentPage.innerHTML = data.page.toString();
  numOfPages.innerHTML = pages.toString();
}

function onGotoFirstPageHandler(): void {
  listMovies(1);
}

function onGotoPrevPageHandler(): void {
  let page: number = +pageNumber!.innerHTML;

  page > 1 ? page-- : 1;
  listMovies(page);
}

function onGotoNextPageHandler(): void {
  const numOfPages: number = parseInt(pages!.innerHTML);
  let page: number = +pageNumber!.innerHTML;

  page < numOfPages ? page++ : 500;
  listMovies(page);
}

function onGotoLastPageHandler(): void {
  listMovies(500);
}

document.addEventListener('DOMContentLoaded', initApp);
