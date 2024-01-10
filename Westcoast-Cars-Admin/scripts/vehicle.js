import HttpClient from './http.js';
import { convertFormDataToJson } from './utilities.js';

const form = document.querySelector('#addVehicleForm');

const addVehicle = async (e) => {
  e.preventDefault();

  const vehicle = new FormData(form);
  const obj = convertFormDataToJson(vehicle);
  saveVehicle(obj);
};

const saveVehicle = async (vehicle) => {
  const url = 'http://localhost:3000/vehicles';
  const http = new HttpClient(url);
  await http.add(vehicle);
  location.href = './index.html';
};

form.addEventListener('submit', addVehicle);
