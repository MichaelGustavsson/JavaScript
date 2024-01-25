import { BaseType } from '../models/BaseType.js';
import { TV } from '../models/TVModel.js';
import { getSerie } from '../services/tv-serie-detail.js';

function initApp() {
  findSerie();
}

async function findSerie(): Promise<void> {
  const id = location.search.split('=')[1];
  const result = await getSerie(+id);
  displaySerie(result as unknown as TV);
}

function displaySerie(serie: TV): void {
  const div = document.createElement('div');

  div.innerHTML = `
      <div class="details-top">
        <div>${
          serie.poster_path
            ? `<img src="https://image.tmdb.org/t/p/w500${serie.poster_path}" alt="${serie.name}"/>`
            : `<img src="../dist/assets/images/No-Image.jpg" alt="${serie.name}" />`
        }</div>
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

  document.querySelector('#details')!.appendChild(div);
  document
    .querySelector('#details')!
    .appendChild(createOverlay(serie.backdrop_path));
}

function createOverlay(backdrop_path: string): HTMLDivElement {
  const overlayDiv = document.createElement('div') as HTMLDivElement;
  overlayDiv.style.backgroundImage = backdrop_path
    ? `url(https://image.tmdb.org/t/p/original/${backdrop_path})`
    : '';
  overlayDiv.style.backgroundSize = 'cover';
  overlayDiv.style.backgroundPosition = 'center';
  overlayDiv.style.backgroundRepeat = 'no-repeat';
  overlayDiv.style.height = '100vh';
  overlayDiv.style.width = '100vw';
  overlayDiv.style.position = 'absolute';
  overlayDiv.style.top = '0';
  overlayDiv.style.left = '0';
  overlayDiv.style.zIndex = '-1';
  overlayDiv.style.opacity = '0.4';

  return overlayDiv;
}

document.addEventListener('DOMContentLoaded', initApp);
