import HttpClient from './http.js';
import { createVehicleList } from './dom.js';

const initPage = async () => {
  const url = 'http://localhost:3000/vehicles';
  // Skapa ett objekt av typen HttpClient
  const http = new HttpClient(url);

  // Hämta alla bilar...
  const vehicles = await http.get();
  createVehicleList(vehicles, document.querySelector('#vehicles'));
  // Hämta in alla elementen (div) och lägga på en klickhändelse
  const cards = document.querySelectorAll('#vehicles div');

  // Gå igenom all div element och lägg till en klick händelse
  cards.forEach((card) => {
    card.addEventListener('click', selectedVehicle);
  });
};

const selectedVehicle = (e) => {
  let vehicleId = 0;
  if (e.target.localName === 'div') {
    vehicleId = e.target.getAttribute('vehicleid');
  } else if (e.target.localName === 'span') {
    vehicleId = e.target.parentElement.getAttribute('vehicleid');
  }

  // Navigera till edit-vehicle.html...
  location.href = `./edit-vehicle.html?id=${vehicleId}`;
};

// Händelselyssnare EventListeners...
document.addEventListener('DOMContentLoaded', initPage);
