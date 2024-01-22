import { ResponseModel } from '../models/ResponseModel.js';
import { TV } from '../models/TVModel.js';
import { listAllSeries, searchMovies } from '../services/tv-series.js';

document
  .querySelector<HTMLFormElement>('#searchForm')!
  .addEventListener('submit', onSearch);
document
  .querySelector<HTMLSpanElement>('#gotoFirst')!
  .addEventListener('click', onGotoFirstPageHandler);
document
  .querySelector<HTMLSpanElement>('#gotoPrevious')!
  .addEventListener('click', onGotoPrevHandler);
document
  .querySelector<HTMLSpanElement>('#gotoNext')!
  .addEventListener('click', onGotoNextPageHandler);
document
  .querySelector<HTMLSpanElement>('#gotoLast')!
  .addEventListener('click', onGotoLastPageHandler);

const pageNumber = document.querySelector<HTMLSpanElement>('#pageNo');
const pages = document.querySelector<HTMLSpanElement>('#pages');

function initApp() {
  listSeries();
}

async function listSeries(page: number = 1): Promise<void> {
  let result: ResponseModel;
  let query: string =
    document.querySelector<HTMLInputElement>('#searchInput')!.value;

  result = await listAllSeries(page);

  if (query) {
    result = await searchMovies(query, page);
  } else {
    result = await listAllSeries(page);
  }

  displaySeries(result.results as [TV]);
  displayPagination(result);
}

function displaySeries(series: [TV]) {
  const app = document.querySelector('#top-series') as HTMLDivElement;
  app.innerHTML = '';

  for (let serie of series) {
    const div = document.createElement('div');
    const imageAnchor = document.createElement('a');
    const image = document.createElement('img');
    const cardBody = document.createElement('div');
    const heading = document.createElement('h5');
    const p = document.createElement('p');
    const small = document.createElement('small');

    div.classList.add('card');
    imageAnchor.href = `./tv-details.html?id=${serie.id}`;
    image.alt = `alt=${serie.name}`;
    image.src = serie.poster_path
      ? `https://image.tmdb.org/t/p/w500${serie.poster_path}`
      : '../dist/assets/images/No-Image.jpg';
    imageAnchor.appendChild(image);
    div.appendChild(imageAnchor);

    cardBody.classList.add('card-body');
    heading.classList.add('card-title');
    heading.textContent = serie.name;

    p.classList.add('card-text');
    p.classList.add('text-muted');
    small.textContent = `Premiär datum: ${serie.first_air_date}`;
    p.appendChild(small);

    cardBody.appendChild(heading);
    cardBody.appendChild(p);
    div.appendChild(cardBody);
    app.appendChild(div);
  }
}

function displayPagination(data: ResponseModel): void {
  const pages = data.total_pages > 500 ? 500 : data.total_pages;
  const currentPage = document.querySelector('#pageNo')!;
  const numOfPages = document.querySelector('#pages')!;
  currentPage.innerHTML = data.page.toString();
  numOfPages.innerHTML = pages.toString();
}

function onGotoFirstPageHandler(): void {
  listSeries(1);
}

function onGotoPrevHandler(): void {
  let page: number = +pageNumber!.innerHTML;
  page > 1 ? page-- : 1;
  listSeries(page);
}

async function onGotoNextPageHandler(): Promise<void> {
  const numOfPages: number = +pages!.innerHTML;
  let page: number = +pageNumber!.innerHTML;
  page < numOfPages ? page++ : 500;
  listSeries(page);
}

function onGotoLastPageHandler(): void {
  listSeries(+pages!.innerHTML);
}

async function onSearch(e: SubmitEvent): Promise<void> {
  e.preventDefault();

  listSeries(1);
}
document.addEventListener('DOMContentLoaded', initApp);
