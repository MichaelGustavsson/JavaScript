var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { getSerie } from '../services/tv-serie-detail.js';
import { createOverlay } from './shared.js';
function initApp() {
    findSerie();
}
function findSerie() {
    return __awaiter(this, void 0, void 0, function* () {
        const id = location.search.split('=')[1];
        const result = yield getSerie(+id);
        displaySerie(result);
    });
}
function displaySerie(serie) {
    const div = document.createElement('div');
    div.innerHTML = `
      <div class="details-top">
        <div>${serie.poster_path
        ? `<img src="https://image.tmdb.org/t/p/w500${serie.poster_path}" alt="${serie.name}"/>`
        : `<img src="../dist/assets/images/No-Image.jpg" alt="${serie.name}" />`}</div>
        <div  class="info">
          <h2>${serie.name}</h2>
          <p>
            <i class="fas fa-star rating"></i>
            ${serie.vote_average.toFixed(1)} / 10
          </p>
          <p class="text-muted">Premiär: ${serie.first_air_date}</p>
          <p>${serie.overview}</p>
          <h5>Genre</h5>
          <ul>
            ${serie.genres.map((genre) => `<li>${genre.name}</li>`).join('')}
          </ul>
          <p class="text-muted">Antal säsonger ${serie.number_of_seasons}</p>
        </div>
      </div>
    `;
    document.querySelector('#details').appendChild(div);
    document
        .querySelector('#details')
        .appendChild(createOverlay(serie.backdrop_path));
}
document.addEventListener('DOMContentLoaded', initApp);
