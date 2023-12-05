/* villkorshantering med if och else */

// Regler (constraints)
/*
const maxCarAge = 5;
const maxMileage = 100000;

const mileage = 125000;
const modelYear = 2020;
const currentDate = new Date();
const currentYear = currentDate.getFullYear();

const fiat = {
  make: 'Fiat',
  model: 'Uno',
  modelYear: 2017,
  mileage: 98575,
  hasCompleteTyreSet: true,
  hasCompleteKeySet: true,
  hasCompleteService: true,
};

const carAge = currentYear - modelYear;
// console.log(carAge);

*/
// if(villkor) {kodblocket}
/*if (carAge < maxCarAge) {
  // kodblock...
  console.log('Bilen är intressant');
} else {
  console.log('Tyvärr, bilen är inte intressant. Den är för gammal!');
}*/

// Om vi endast har en rad kod i vår if sats kan vi skriva koden utan {}...
// if (carAge < maxCarAge) console.log('Bilen är intressant');

// Logiska operatorn && = AND(OCH)
// Båda villkoren i if satsen måste vara uppfyllda...
/*if (carAge < maxCarAge && mileage < maxMileage) {
  // kodblock...
  console.log('Bilen är intressant');
} else {
  console.log('Tyvärr, bilen är inte intressant. Den är för gammal!');
}*/

// Logiska operatorn || = OR(ELLER)
/*if (carAge < maxCarAge || mileage < maxMileage) {
  // kodblock...
  console.log('Bilen är intressant');
} else {
  console.log('Tyvärr, bilen är inte intressant. Den är för gammal!');
}*/
/*
if (currentYear - fiat.modelYear < maxCarAge) {
  console.log('Bilen är intressant');
} else {
  console.log('Bilen är för gammal för oss!');
}
*/
/*
if (
  currentYear - fiat.modelYear < maxCarAge &&
  fiat.mileage < maxMileage &&
  fiat.hasCompleteTyreSet
) {
  console.log('Bilen är intressant');
} else {
  console.log('Bilen är för gammal för oss!');
}
*/
/*
if (currentYear - fiat.modelYear < maxCarAge || fiat.mileage < maxMileage) {
  console.log('Bilen är intressant');
} else {
  console.log('Bilen är för gammal för oss!');
}
*/

// Skriva en if sats som avgör vilken dag det är.
// Beroende på dag ska jag göra olika saker.
// const day = 'Måndag';

// if else if sats...
/*
if (day == 'Måndag') {
  console.log('Veckans jobbigaste, svårt att komma igång');
} else if (day == 'Tisdag') {
  console.log('Håller kurs!');
} else if (day == 'Onsdag') {
  console.log('Skriver kod åt kund');
} else if (day == 'Torsdag') {
  console.log('Håller kurs igen!');
} else if (day == 'Fredag') {
  console.log('Snart dags för helg, NU TAR VI HELG!');
} else if (day == 'Lördag') {
  console.log('Nu vilar vi upp oss');
} else if (day == 'Söndag') {
  console.log('Vilar fortfarande upp oss');
} else {
  console.log(`${day} är inte en veckodag`);
}
*/

// Switch satsen kan ersätta en lång if else if else...
/*
const day = 'Lördag';
switch (day) {
  case 'Måndag':
    console.log('Veckans jobbigaste, svårt att komma igång');
    break;
  case 'Tisdag':
    console.log('Håller kurs!');
    break;
  case 'Onsdag':
    console.log('Skriver kod åt kund');
    break;
  case 'Torsdag':
    console.log('Håller kurs igen!');
    break;
  case 'Fredag':
    console.log('Snart dags för helg, NU TAR VI HELG!');
    break;
  case 'Lördag':
    console.log('Nu vilar vi upp oss');
    break;
  case 'Söndag':
    console.log('Nu vilar vi upp oss');
    break;
  default:
    console.log(`${day} är inte en veckodag`);
}
*/

// En äkta fallthrough...
/*
const day = 'Julafton';
switch (day) {
  case 'Måndag': // Villkoret/test avslutas med kolon(:)
    console.log(`Veckans jobbigaste, svårt att komma igång`);
    break;
  case 'Tisdag':
    console.log('Håller kurs!');
    break;
  case 'Onsdag':
    console.log('Skriver kod åt kund');
    break;
  case 'Torsdag':
    console.log('Håller kurs igen!');
    break;
  case 'Fredag':
    console.log('Snart dags för helg, NU TAR VI HELG!');
    break;
  case 'Lördag':
  case 'Söndag':
    console.log('Nu vilar vi upp oss');
    break;
  default:
    console.log(`${day} är inte en veckodag`);
}

const statusCode = 200;
switch (statusCode) {
  case 200:
    console.log('OK');
    break;
  case 201:
    console.log('Created');
    break;
  case 304:
    console.log('Not modified');
    break;
  case 400:
    console.log('Bad request');
    break;
}
*/

// TRUTHY VALUES

/*
  Falsy(osanna):
    0,
    '',
    undefined,
    null,
    NaN

  Truthy (sanna)
    skiljt ifrån 0,
    'michael',
    {}
*/
/*
console.log(Boolean(0));
console.log(Boolean(''));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(NaN));

console.log(Boolean(1));
console.log(Boolean(-1));
console.log(Boolean('michael'));
console.log(Boolean({}));
*/
/*
let balance = 0;

if (balance) {
  console.log('Du har pengar på kontot');
} else {
  console.log('Du har inga mer pengar att spendera');
}
*/

// EXPRESSIONS OCH STATEMENTS...

// Expressions producerar ett värde...
// 10 + 5 = 15 är vårt expression
// 2023 är vårt expression
// true && false && !false

// Statements utför något...
/*
if (10 < 20) {
  console.log('10 är verkligen mindre än 20');
}
*/

// 'use strict';  // Skyddar oss mot odeklarerade variabler.
// Finns idag redan aktiverat i de flesta verktyg...

/*
                  let isAllKeysReturned = true;

console.log(isAllKeysReturned);
*/

// TERNARY OPERATOR - One line if statement
// Består av 3 delar:
//  Del 1: villkoret (y === 10)
//  Del 2: vad ska ske om det är sant ? ''
//  Del 3: vad ska ske om det är osant :
// const x = y === 10 ? "2": "3"

// const time = 21;

// const napTime = time >= 22 ? 'dags att sova' : 'inte riktigt än';
// console.log(time >= 22 ? 'dags att sova' : 'inte riktigt än');
// if (time <= 22) {
//   console.log('dags att sova');
// } else {
//   console.log('inte riktigt än');
// }
// console.log(napTime);

// let och const var blocked scope
// deklarerade i ett kodblock och har en livslängd så länge blocket existerar.
// var deklarerat i det globala namnutrymmet(windows objektet)

// let lastName = 'Gustavsson';
const x = false;

if (x) {
  let name = 'michael';
  const vehicle = { id: 1, make: 'Volvo' };
  console.log(vehicle);
  console.log(name);
} else {
  console.log('Hittade ingen bil');
  console.log(x);
  console.log('Name', name);
  console.log(vehicle);
}

// console.log(vehicle);
// console.log(lastName);

// const interface = 'Video';
// console.log(interface);

// const private = 'Michael';
// console.log(private);
