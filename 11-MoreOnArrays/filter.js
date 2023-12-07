/*********************************************************/
//  Array.filter()
/*********************************************************/
// Filter tar ett predicate(funktion)/villkoret
// returnerar en ny array med resultatet...
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Hämta alla jämna tal och placera dem i en ny array...
// 1. Använda en forEach loop...
const evenNumbers = [];
numbers.forEach(function (number) {
  if (number % 2 === 0) {
    evenNumbers.push(number);
  }
});

console.log(numbers);
console.log(evenNumbers);

// 2. Array.filter funktionen...
const evenNumbersFiltered = numbers.filter((number) => number % 2 === 0);
console.log(evenNumbersFiltered);
console.log(numbers);

// Ett mer verklighetstroget exempel...
// Hämta alla bilar av märket Mercedes...
console.log(vehicles);
const mercedes = vehicles.filter(
  (vehicle) => vehicle.manufacturer.toLowerCase() === 'mercedes'
);

console.log('Mercedes bilar i lager', mercedes);

// Hämta alla bilar nyare än 2016...
const interesting = vehicles.filter((vehicle) => vehicle.modelYear > 2016);
console.log(interesting);

// Hämta alla bilar som har gått mindre än 10000 mil...
const lowMileage = vehicles.filter((vehicle) => vehicle.mileage < 100000);
console.log(lowMileage);

const dummyArray = [];
vehicles.forEach((vehicle) => {
  if (vehicle.mileage < 100000) {
    dummyArray.push(vehicle);
  }
});
console.log(dummyArray);

const prospects = vehicles.filter(
  (vehicle) => vehicle.modelYear > 2016 && vehicle.mileage < 100000
);

console.log(prospects);
