const form = document.querySelector('#addVehicleForm');

const addVehicle = async (e) => {
  e.preventDefault();
  console.log('Sparar ny bil');
};

form.addEventListener('submit', addVehicle);
