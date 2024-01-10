import HttpClient from './http.js';
import { convertFormDataToJson } from './utilities.js';

const form = document.querySelector('#updateVehicleForm');
const deleteButton = document.querySelector('#delete');

let vehicleId = 0;

const initPage = () => {
  vehicleId = location.search.split('=')[1];
  getVehicle(vehicleId);
};

const getVehicle = async (id) => {
  const url = `http://localhost:3000/vehicles/${id}`;
  const http = new HttpClient(url);
  const vehicle = await http.get();
  loadDataToForm(vehicle);
};

const loadDataToForm = (vehicle) => {
  // skapa en dictionary lista med alla egenskaper ifrån
  // objektet vehicle... ['key', 'value']
  const entries = new URLSearchParams(vehicle).entries();
  for (let [key, value] of entries) {
    if (key !== 'id') {
      const input = form.elements[key];
      input.value = value;
    }
  }
};

const updateVehicle = async (e) => {
  e.preventDefault();

  const vehicle = new FormData(form);
  const obj = convertFormDataToJson(vehicle);

  const url = `http://localhost:3000/vehicles/${vehicleId}`;
  const http = new HttpClient(url);
  await http.update(obj);

  location.href = './index.html';
};

const removeVehicle = async () => {
  const url = `http://localhost:3000/vehicles/${vehicleId}`;
  const http = new HttpClient(url);
  await http.delete();
  location.href = './index.html';
};

document.addEventListener('DOMContentLoaded', initPage);
form.addEventListener('submit', updateVehicle);
deleteButton.addEventListener('click', removeVehicle);
