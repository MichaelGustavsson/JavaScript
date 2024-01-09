import HttpClient from './http.js';

function initPage() {
  // const loc = location;
  // console.log(loc.search);
  const vehicleId = location.search.split('=')[1];
  // console.log('Vehicle id', vehicleId);
  displayVehicleDetails(vehicleId);
}

async function displayVehicleDetails(id) {
  const url = 'http://localhost:3000/vehicles/' + id;
  // console.log(url);
  const http = new HttpClient(url);
  const vehicle = await http.get();
  console.log(vehicle);
}

document.addEventListener('DOMContentLoaded', initPage);
