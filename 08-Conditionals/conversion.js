// KONVERTERING AV VÄRDEN I JAVASCRIPT...
/*
  JavaScript hanterar konvertering av datatyper på två sätt.
  1.  Type Conversion = Manuell omvandling/konvertering ifrån en datatyp till en annan.
  2.  Type Coersion = JavaScript försöker automatiskt att omvandla
      ett värdes typ till en annan typ(värdetyper)
*/

// 1. TYPE CONVERSION...
const mileage = '125000';

console.log(mileage);
console.log(typeof mileage, mileage);

console.log(mileage + 100000);
console.log(typeof mileage, mileage + 100000);

console.log(Number(mileage) + 100000);

console.log(String(25));

console.log(Number('Fiat'));
console.log(typeof NaN);
console.log(Number('250'));

// 2. TYPE COERSION...
const testValue = 3500;
console.log(typeof testValue, testValue);

// Type coersion...
console.log('Min bil har gått ' + testValue + ' mil');
console.log(testValue + ' har min bil har gått');
// Type conversion...
console.log('Min bil har gått ' + String(testValue) + ' mil');

console.log('20' + '10');
console.log('20' + '10' - 5);
console.log('20' + '10' + 5);

console.log(Number('20') + '10' - 5);

console.log('10' * '2');
console.log('Fiat' * '2');

console.log('10' / '2');

let x = '10' + '2' + '5';
console.log(typeof x, x);

x = '10' - '2' + '5';
console.log(typeof x, x);

x = '10' - '2' - 3 + '5';
console.log(x);
