var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { listAllMovies, searchMovies } from '../services/movies.js';
document
    .querySelector('#searchForm')
    .addEventListener('submit', onSearch);
document
    .querySelector('#gotoFirst')
    .addEventListener('click', onGotoFirstPageHandler);
document
    .querySelector('#gotoPrevious')
    .addEventListener('click', onGotoPrevHandler);
document
    .querySelector('#gotoNext')
    .addEventListener('click', onGotoNextPageHandler);
document
    .querySelector('#gotoLast')
    .addEventListener('click', onGotoLastPageHandler);
const pageNumber = document.querySelector('#pageNo');
const pages = document.querySelector('#pages');
function initApp() {
    listMovies();
}
function listMovies(page = 1) {
    return __awaiter(this, void 0, void 0, function* () {
        let result;
        let query = document.querySelector('#searchInput').value;
        if (query) {
            result = yield searchMovies(query, page);
        }
        else {
            result = yield listAllMovies(page);
        }
        displayMovies(result.results);
        displayPagination(result);
    });
}
function displayMovies(movies) {
    const app = document.querySelector('#top-movies');
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
function displayPagination(data) {
    const pages = data.total_pages > 500 ? 500 : data.total_pages;
    const currentPage = document.querySelector('#pageNo');
    const numOfPages = document.querySelector('#pages');
    currentPage.innerHTML = data.page.toString();
    numOfPages.innerHTML = pages.toString();
}
function onGotoFirstPageHandler() {
    listMovies(1);
}
function onGotoPrevHandler() {
    let page = +pageNumber.innerHTML;
    page > 1 ? page-- : 1;
    listMovies(page);
}
function onGotoNextPageHandler() {
    return __awaiter(this, void 0, void 0, function* () {
        const numOfPages = +pages.innerHTML;
        let page = +pageNumber.innerHTML;
        page < numOfPages ? page++ : 500;
        listMovies(page);
    });
}
function onGotoLastPageHandler() {
    listMovies(+pages.innerHTML);
}
function onSearch(e) {
    return __awaiter(this, void 0, void 0, function* () {
        e.preventDefault();
        listMovies(1);
    });
}
document.addEventListener('DOMContentLoaded', initApp);
