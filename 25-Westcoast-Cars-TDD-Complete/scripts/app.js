import { validateString } from './utilities/validate.js';
const form = document.querySelector('#addVehicleForm');

const addVehicle = (e) => {
  e.preventDefault();

  try {
    const formData = new FormData(form);

    // Uppgiften är att enligt TDD ta fram följande:
    // 1.
    // En funktion som validerar alla fälten
    // Alla fält måste vara ifyllda.

    // 2.
    // Att inmatningfälten, årsmodell, antal köra km och värdering ska omvandlas till
    // numeriskt värde...

    const regNo = formData.get('registrationNumber');

    const entries = Array.from(formData.entries());

    entries.forEach((entry) => {
      console.log(entry);
      // validateString(entry[1]);
    });

    const modelYear = formData.get('modelYear');

    console.log(modelYear);
  } catch (error) {
    console.log(error);
  }
};

form.addEventListener('submit', addVehicle);
