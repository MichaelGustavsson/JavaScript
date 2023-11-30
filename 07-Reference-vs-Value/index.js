// Value vs Reference types...
// Primitiv typ dvs Value type(värde type)
/************************************************/
// ALLTID HANTERAD PÅ STACKEN!!!(PRIMITIVA TYPER)
/************************************************/
let firstName = 'Michael'; //En adress på stacken
console.log('FirstName', firstName);

let anotherName = firstName; //Får jag en ny adress på stacken
// Värdet Michael kopieras till den nya adressen.
console.log(anotherName, firstName);

// Ändras endast värdet på anotherName's adress.
// anotherName = 'Oskar';
firstName = 'Oskar';
console.log(anotherName, firstName);

/**************************************************/
// Referens typen...
/**************************************************/
// 1. En adress på heap skapas för Car1
// 2. Adressen placeras på stacken...
const car1 = {
  id: 1,
  make: 'Volvo',
  model: 'XC90',
};

console.log('Bil 1', car1);

// 1. En adress på Stacken skapas för bil 2 med samma adress
// till heap...
// Kopierar referensen ifrån car1 till car2
let car2 = car1;
console.log('Bil 2', car2);

car2.model = 'V40';

console.log('Bil 2', car2, 'Bil 1', car1);

// Sammanfattningsvis så pekar två referens typer till sammma
// adress på heap minnet

let car3 = {};
