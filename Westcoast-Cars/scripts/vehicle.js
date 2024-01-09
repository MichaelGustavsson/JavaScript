import HttpClient from './http.js';
const form = document.querySelector('#addVehicleForm');

function initPage() {}
function addVehicle(e) {
  e.preventDefault();

  // Skapa ett nytt objekt för ny bil...
  const vehicle = {
    registrationNumber: 'EGH956',
    manufacturer: 'Chevrolet',
    model: 'Impala',
    modelYear: '1958',
    imageUrl: 'car13.jpg',
    mileage: 25000,
    value: 175000,
    descript: 'Ny bil igen',
  };

  console.log(vehicle);

  saveVehicle(vehicle);
}

async function saveVehicle(vehicle) {
  const url = 'http://localhost:3000/vehicles/';
  const http = new HttpClient(url);

  const newVehicle = await http.add(vehicle);
  console.log(newVehicle);
}

document.addEventListener('DOMContentLoaded', initPage);
form.addEventListener('submit', addVehicle);
