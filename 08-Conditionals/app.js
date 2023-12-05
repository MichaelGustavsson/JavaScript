// Hjälp jag är beroende av det som finns i index.js
// Fixa det

// Jämförelse
// 1. loose comparison (==)
// 2. strict comparison (===)

// ANVÄND ALLTID STRICT COMPARISON FÖR ATT UNDVIKA
// MÄRKLIGA BUGGAR...

// loose comparison (==)
/*
const number = '10';
if (number == 10) {
  console.log(`Number är ${number} (loose)`);
}

console.log(typeof number, number);

// strict comparison (===)
// Strict kontrollera så att number är av samma typ
// som det vi jämför med...
if (number === 10) {
  console.log(`Number är ${number} (strict)`);
}

console.log(typeof number, number);
*/

/*
const number = prompt('Ange ett nummer');
console.log(typeof number, number);

if (number == 40) {
  console.log(`Du angav värdet ${number}`);
}

//loose comparison...
if (number !== 40) {
  console.log(
    `Du angav inte värdet 40 utan istället fick jag värder ${number}`
  );
}
*/

/*
const input = prompt('Ange ett nummer');
let number;
console.log(typeof input, input);
number = Number(input);
console.log(typeof number, number);
*/

// const age = 34;
// console.log('34' == age);
// console.log('34' === age);

console.log('Från app.js', lastName);
