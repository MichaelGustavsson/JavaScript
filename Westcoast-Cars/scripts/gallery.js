import { createCard, addImageClickHandler } from './dom.js';
import HttpClient from './http.js';

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
  // Skapat en instans av vår nya HttpClient class(http.js)...
  const http = new HttpClient(url);
  // Kom ihåg att invänta http.get metoden med await...
  const vehicles = await http.get();
  return vehicles;
};

document.addEventListener('DOMContentLoaded', initPage);
