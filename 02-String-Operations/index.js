/*******************************************/
// Slå ihop strängar...
/*******************************************/

const make = 'Volvo';
const model = 'V60';
const modelYear = 2018;

const vehicle =
  'Tillverkare ' +
  make +
  ' ' +
  'Modell ' +
  ' ' +
  model +
  ' ' +
  'Årsmodell ' +
  modelYear;
// console.log(vehicle);

// String templates (string interpolation)
// Rekommenderat sätt att göra det på!!!
const Volvo = `Tillverkare ${make} 
Modell ${model} 
Årsmodell ${modelYear}`;

// console.log(Volvo);

// Concat metod som låter oss slå samman flera sträng variabler till en...
// Används inte speciellt ofta, sedan vi fick template strings...
let info = 'Tillverkare';
const VolvoV60 = info.concat(
  ' ',
  make,
  ' Modell ',
  model,
  ' Årsmodell ',
  modelYear
);
// console.log(VolvoV60);

// console.log('Här kommer något "viktigt"');

/*******************************************/
// Egenskaper på strängar...
/*******************************************/
const lengthOfVehicle = vehicle.length;
// console.log('Antal tecken i strängen vehicle', lengthOfVehicle);

/*******************************************/
// Metoder på strängar...
/*******************************************/
// Plocka ut enskilda tecken ur en sträng...

const firstName = 'Elisabeth';
// console.log('Antal tecken i', firstName, firstName.length);
// console.log('FirstName', firstName);
// console.log('Ett tecken', firstName[0]);
// console.log('Ett tecken', firstName[2]);
// console.log('Ett tecken', firstName[8]);
// Steg 1. Hämta sista positionen för sista tecknet
const index = firstName.length - 1; // Strängens längd minus 1
// console.log(index);
// console.log('Sista tecknet', firstName[index]);

// Den coola vägen att göra samma sak på!!!😁
// console.log('Sista tecknet', firstName[firstName.length - 1]);

// string.at()...
// Det moderna sättet😁
// console.log('Första tecknet', firstName.at(0));
// console.log('Sista tecknet', firstName.at(-1));
// console.log('Det tredje tecknet', firstName.at(2));

// string.charAt()...
// console.log('Första tecknet', firstName.charAt(0));
// console.log('Sista tecknet', firstName.charAt(-1));
// console.log('Sista tecknet', firstName[firstName.length - 1]);
// console.log('Det tredje tecknet', firstName.charAt(2));

// Plocka flera tecken ur en sträng...
// string.slice()...
// console.log(firstName, firstName.slice(2));
// console.log(firstName, firstName.slice(2, 3));
// console.log(firstName, firstName.slice(-4, -2));
// Elisabeth

// Plocka flera tecken ur en sträng...
// Ett bättre sätt😁
// string.substring()...
// console.log(firstName, firstName.substring(2));
// console.log(firstName, firstName.substring(2, 0));
// console.log(firstName, firstName.reverse()); //finns tyvärr inte än!

// Kontrollera om en sträng börjar eller slutar med en bokstav...
// string.startsWith();
// console.log(firstName, firstName.startsWith('e'));
// console.log(firstName, firstName.startsWith('E'));
// console.log(firstName, firstName.startsWith('Eli'));

// string.endsWith()
// console.log(firstName, firstName.endsWith('th'));

// Justera stora och små bokstäver...
// string.toUpperCase()
// console.log(firstName, firstName.toUpperCase());

// string.toLowerCase()
// console.log(firstName, firstName.toLowerCase());

// Kombinera metoder, kedja ihop metoder
// console.log(
//   firstName,
//   firstName.toLowerCase(),
//   firstName.toLowerCase().startsWith('e')
// );
// console.log(
//   firstName,
//   firstName.toUpperCase(),
//   firstName.toUpperCase().startsWith('E')
// );

// Städa bort mellanslag/tomma tecken...
// string.trim() tar bort tom tecken ifrån början och slutet av strängen
// string.trimEnd() tar bort tom tecken i slutet av strängen.
// string.trimStart() tar bort tom tecken i början av strängen.
const address = ' Strandvägen 1         ';
// console.log('X', address, 'X');

// console.log('X', address.trim(), 'X');
// console.log('X', address.trimStart(), 'X');
// console.log('X', address.trimEnd(), 'X');

// Ersätta tecken i en sträng
// string.replace()...
// const title = 'JavaScript är fantastiskt kul att jobba med';
// console.log(title, title.replace('f', 'F'));
// console.log(title, title.replace('fantastiskt', 'otroligt!'));
// console.log(title, title.replace('fa', 'FA'));

// const regex = /JavaScript/i;

// console.log(title.replace(regex, 'React'));

// Repetera ord eller bokstäver...
const test = 'snabb';

console.log(test, test.repeat(10));
