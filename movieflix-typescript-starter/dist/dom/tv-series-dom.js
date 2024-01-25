var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { listAllSeries, searchSeries } from '../services/tv-series.js';
document
    .querySelector('#searchForm')
    .addEventListener('submit', onSearch);
function initApp() {
    listSeries();
}
function listSeries(page = 1) {
    return __awaiter(this, void 0, void 0, function* () {
        let result;
        let query = document.querySelector('#searchInput').value;
        if (query) {
            result = yield searchSeries(query, page);
        }
        else {
            result = yield listAllSeries(page);
        }
        displaySeries(result.results);
    });
}
function onSearch(e) {
    return __awaiter(this, void 0, void 0, function* () {
        e.preventDefault();
        listSeries(1);
    });
}
function displaySeries(series) {
    const app = document.querySelector('#top-series');
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
document.addEventListener('DOMContentLoaded', initApp);
