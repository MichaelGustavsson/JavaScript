/*********************************************/
// Arbeta med numeriska värden i JavaScript
/*********************************************/
// Egenskap som visar största möjliga numerisk tal
// som vi kan använda i JavaScript...
// console.log(Number.MAX_VALUE);

// Egenskap som visar minsta möjliga numerisk tal
// som vi kan använda i JavaScript...
// console.log(Number.MIN_VALUE);

// Metoder som vi kan använda för att arbeta med datatypen Number...
// console.log(Number.isInteger(2.56789));
// console.log(Number.isInteger(2));

// Konverteringsmetoder...
// Konvertera en sträng till flyttal...
// console.log(Number.parseFloat('1256.789'));
// console.log(Number.parseFloat('kalle')); //NaN = Not a Number...

// Konvertera en sträng till heltal...
// console.log(Number.parseInt('1256.789'));
// console.log(Number.parseInt('kalle'));

// Hantera antalet decimaler...
// console.log(Number.parseFloat('1256.789').toFixed(4));

let y = 34.999;
// console.log(y, y.toFixed(2));

// 255.255.255.0
// ffaff12
y = 255;
// console.log(y.toString(16)); // Hexadecimal systemet. Datorbaserat bearbetning
// console.log(y.toString(10)); // Tio bas systemet. Det vi människor använder dagligen
// console.log(y.toString(8)); // Octalt bas system stordatorer

let payment = 2500000.75;
console.log(payment.toString());
console.log(payment.toLocaleString());
console.log(payment.toLocaleString('sv-SE'));
console.log(payment.toLocaleString('en-US'));
console.log(payment.toLocaleString('en-GB'));

// console.log(payment.toPrecision(6));

// bigint, representeras av ett litet n sist efter sista siffran...
let z = 9999999999999n;
console.log(z);
