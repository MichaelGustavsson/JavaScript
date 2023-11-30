// Ett objekt är ett sätt att kapsla information som hör ihop i en

// Hur vi kan arbeta med anonyma objekt...
// 1.
const vehicle = new Object();

// Här sätter vi egenskapernas namn och dess startvärde
vehicle.id = 1;
vehicle.make = 'Volvo';
vehicle.model = 'V90';
vehicle.color = 'Blue metallic';
vehicle.modelYear = '2020';
vehicle.mileage = 34500;

console.log('Vehicle', vehicle);

// 2. Ett mer modernare och enklare och snyggare sätt att göra det på
const car = {
  id: 2,
  make: 'Ford',
  model: 'Mach-E',
};

console.log('Car', car);

// Ooooops! jag glömde att lägga till color, mileage och modelYear
// JavaScript har dynamiska möjligheter att utöka ett objekt😁
car.color = 'Black';
car.mileage = 5000;
car.modelYear = 2022;

console.log('Car', car);

vehicle.registrationNumber = 'ABC123';

// Ta bort egenskaper...
delete vehicle.color;
console.log('Vehicle', vehicle);

car['model'] = 'Mustang';
car.model = '';
