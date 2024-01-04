import { listAllVehicles } from './data/vehicles.js';
import { createCard, addImageClickHandler } from './dom.js';

const gallery = document.querySelector('#vehicles-gallery');

function initPage() {
  // iterera igenom alla bilar och skapa html...
  const vehicles = listAllVehicles();

  vehicles.forEach((vehicle) => {
    gallery.appendChild(createCard(vehicle));
  });

  // Hämta in alla bilder och knyt en klick händelse till varje bild...
  const images = document.querySelectorAll('.vehicle-image img');
  addImageClickHandler(images);
}

document.addEventListener('DOMContentLoaded', initPage);
