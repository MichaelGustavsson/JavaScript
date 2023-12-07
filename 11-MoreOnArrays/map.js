/*********************************************************/
//  Array.map()
/*********************************************************/
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const numbers1 = numbers.map((number) => number * 2);
// console.log(numbers1);
// console.log(numbers);

// Vehicles
console.log(vehicles);
// Bara få ut en ny array med vehicle objekt som endast
// innehåller tillverkare, model, årsmodell samt körda km...

// Anonym funktion...
let vehicleList = vehicles.map(function (vehicle) {
  return {
    companyName: vehicle.manufacturer,
    model: vehicle.model,
    modelYear: vehicle.modelYear,
    mileage: vehicle.mileage,
  };
});

// Arrow function...
vehicleList = vehicles.map((vehicle) => {
  return {
    companyName: vehicle.manufacturer,
    model: vehicle.model,
    modelYear: vehicle.modelYear,
    mileage: vehicle.mileage,
  };
});

console.log(vehicleList);

const vehicleNames = vehicles.map((car) => {
  return {
    vehicleName: `${car.manufacturer} ${car.model} ${car.modelYear}`,
  };
  // return `<div>${car.manufacturer} ${car.model} ${car.modelYear}</div>`;
});

console.log(vehicleNames);
