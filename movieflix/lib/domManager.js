export const createMovieListDisplay = (movie) => {
  const card = document.createElement('div');
  card.classList.add('card');

  // Skapa poster plattan
  const poster = document.createElement('a');
  poster.href = `/movie-details.html?id=${movie.id}`;
  // Lägga till bilden(poster)
  const image = document.createElement('img');
  image.src = movie.poster;
  image.setAttribute('alt', movie.title);

  poster.appendChild(image);
  card.appendChild(poster);

  // Skapa texten i card elementet
  const body = document.createElement('div');
  body.classList.add('card-body');

  // Skapa h5 rubrik...
  const bodyHeader = document.createElement('h5');
  bodyHeader.classList.add('card-title');
  bodyHeader.appendChild(document.createTextNode(movie.title));

  // Text för premiär och datum...
  const bodyText = document.createElement('p');
  // class 'card-text'...
  bodyText.classList.add('card-text');
  const smallText = document.createElement('small');
  smallText.classList.add('text-muted');
  smallText.appendChild(
    document.createTextNode(`Premiär datum: ${movie.releaseDate}`)
  );

  bodyText.appendChild(smallText);
  bodyHeader.appendChild(bodyText);
  body.appendChild(bodyHeader);
  card.appendChild(body);
  return card;
};

export const createMovieOverlay = (image) => {
  const overlayDiv = document.createElement('div');
  overlayDiv.style.backgroundImage = `url(${image}`;
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

  return overlayDiv;
};

export const createMovieDetails = (movie) => {
  const details = document.createElement('div');

  details.innerHTML = `
      <div class="details-top">
        <div>${
          movie.poster
            ? `<img src="${movie.poster}"
                class="card-img-top" alt="${movie.title}"/>`
            : `<img src="../assets/images/no-image.jpg"
              class="card-img-top" alt="${movie.title}"/>`
        }
        </div>
        <section>
          <h2>${movie.title}</h2>
          <p>
            <i class="fas fa-star rating"></i>
            ${movie.vote}
          </p>
          <p class="text-muted">Premiär: ${movie.releaseDate}</p>
          <p>${movie.overview}</p>
          <h5>Genre</h5>
          <ul>
          ${movie.genres.map((genre) => `<li>${genre.name}</li>`).join('')}
        </ul>
      </div>
    `;

  return details;
};
