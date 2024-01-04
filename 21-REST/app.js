import { createCard, addImageClickHandler } from './dom.js';

const gallery = document.querySelector('#vehicles-gallery');

async function initPage() {
  const vehicles = await loadVehicles();

  vehicles.forEach((vehicle) => {
    gallery.appendChild(createCard(vehicle));
  });

  // Hämta in alla bilder och knyt en klick händelse till varje bild...
  const images = document.querySelectorAll('.vehicle-image img');
  addImageClickHandler(images);
}

const loadVehicles = async () => {
  const url = 'http://localhost:3000/vehicles';
  const response = await fetch(url);

  if (response.ok) {
    const result = await response.json();
    return result;
  }
};

document.addEventListener('DOMContentLoaded', initPage);
