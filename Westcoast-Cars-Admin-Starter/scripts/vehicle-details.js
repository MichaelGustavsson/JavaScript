import HttpClient from './http.js';

function initPage() {
  const vehicleId = location.search.split('=')[1];
  displayVehicleDetails(vehicleId);
}

async function displayVehicleDetails(id) {
  const url = 'http://localhost:3000/vehicles/' + id;
  const http = new HttpClient(url);
  const vehicle = await http.get();
  console.log(vehicle);
}

document.addEventListener('DOMContentLoaded', initPage);
