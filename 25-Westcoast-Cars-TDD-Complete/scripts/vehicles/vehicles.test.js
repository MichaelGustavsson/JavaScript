import {
  it,
  expect,
  describe,
  beforeAll,
  beforeEach,
  afterAll,
  afterEach,
} from 'vitest';
import { extractVehicleFormData } from './vehicles.js';

// Vi behöver hämta ut alla fälten och kontrollera om allt är ifyllt...
// Om inte måste korrekt felmeddelande presenteras...

// Skapa lite testdata:
const make = 'Volvo';
const model = 'XC60';
const modelYear = '2019';
const mileage = '69500';
const value = '375000';
const imageUrl = 'no-car.jpg';
const description = 'Bra skick endast tjänstebilskörd';

// Skapa en variabel som simulerar formData...
let testForm;

// hooks...
// beforeAll
// beforeEach
// afterAll
// afterEach
beforeEach(() => {
  // Mock data...
  testForm = {
    manufacturer: make,
    model: model,
    modelYear: modelYear,
    mileage: mileage,
    value: value,
    imageUrl: imageUrl,
    description: description,

    get(identifier) {
      return this[identifier];
    },
  };
});

describe('extractVehicleFormData()', () => {
  it('ska hämta information ifrån html formuläret', () => {
    const field = extractVehicleFormData(testForm);

    expect(field.make).toBe(make);
    expect(field.model).toBe(model);
    expect(field.modelYear).toBe(modelYear);
    expect(field.mileage).toBe(mileage);
    expect(field.value).toBe(value);
    expect(field.imageUrl).toBe(imageUrl);
    expect(field.description).toBe(description);
  });
});
