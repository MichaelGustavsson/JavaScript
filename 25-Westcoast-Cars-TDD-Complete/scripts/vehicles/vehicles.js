import { validateString } from '../utilities/validate.js';

export function extractVehicleFormData(form) {
  // Hämta ut tillverkare ur formuläret...
  const make = form.get('manufacturer');
  const model = form.get('model');
  const modelYear = form.get('modelYear');
  const mileage = form.get('mileage');
  const value = form.get('value');
  const imageUrl = form.get('imageUrl');
  const description = form.get('description');

  validateString(make, 'Tillverkare måste anges!');
  validateString(model, 'Modelltyp måste anges!');
  validateString(modelYear, 'Årsmodell måste anges');
  validateString(mileage, 'Antal körda km måste anges');
  validateString(value, 'Uppskattat värde måste anges');
  validateString(imageUrl, 'Bild måste skickas med');
  validateString(
    description,
    'En kortare beskrivning över bilens skick måste anges'
  );

  return { make, model, modelYear, mileage, value, imageUrl, description };
}
