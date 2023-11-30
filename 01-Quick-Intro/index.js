/*  Console metoder... 
    Det finns flera olika sätt att skriva ut
    till webbläsarens konsol...
*/
/*
console.log('Här kommer en kommentar');
console.warn('Här kommer en varning!');
console.error('Nu blev det fel!!!');

// Vi skapar ett anonymt objekt...
console.log({ make: 'Volvo', model: 'V40' });
console.table({ make: 'Volvo', model: 'V40' });
console.dir({ make: 'Volvo', model: 'V40' });
*/

// Skapat en variabel gett den ett värde...
// name = variabel och "Michael" = värdet...
/*
let firstName = 'Michael';

console.log(typeof firstName, firstName);

let mileage;

console.log(typeof mileage); // ger värdet undefined...
mileage = 25000;
console.log(typeof mileage, mileage);

mileage = 10000;

let modelYear = 2017;

console.log(modelYear, mileage);
*/

//"modelYearmileage"
/*console.log(modelYear + ' ' + mileage);

let isActive = true;
console.log(typeof isActive, isActive);

isActive = false;
console.log(typeof isActive, isActive);*/

// isActive = '0';
// console.log(typeof isActive, isActive);

/*let make = null;
console.log(typeof make, make);*/

// Använd inte var längre!!!
/*var model = 'V40';
console.log(typeof model, model);

model = 'Ett fantastisk problem';

const url = 'https://google.com';
url = 'https://redhat.com';*/

/*
    Vi har 3 olika sätt att deklarera variable i JavaScript...
    1.  var = deklarerar en variabel som lagra i det globala
        namnutrymmme. Windows objektet.
        ANVÄND ALDRIG var!!!
    
    2.  let = deklarerar en variabel i ett block scope. (mutable)

    3.  const = deklarerar och initierar (sätter ett värde till variabeln) 
        en variabel i ett block scope (immutable).
*/

// VAD SKA JAG ANVÄNDA???
// Börja alltid med const, senare göra om den till let om behov uppstår.

// JavaScript operatorer...
// Grundläggande matematiska operatorer

const currentYear = 2023;
console.log(typeof currentYear, currentYear);

const ageMalin = currentYear - 1990;
console.log(ageMalin);

let x = 10 * 2 + 5;
console.log(x);

x = (10 * 2) / 5;
console.log(x);

x = 10 * (2 + 5);
console.log(x);

// y = 3 * 3 * 3 *3
let y = 3 ** 4;
console.log(y);

// modulus %
let z = 25;

console.log(25 / 5);
console.log(25 / 3);
console.log(25 % 2);

// Används oftast till presentation i html och CSS
// Dela antalet rader med % 0 jämnt <> 0 ojämnt

let age = 30;
console.log(age);

// age = age + 1;
age += 1;
age -= 1;

// age = age + 1
console.log(age++);
// age = age - 1
console.log(age--);
console.log(age);

age *= 2;
console.log(age);

age /= 2;
console.log(age);

// Strängar och hopslagna strängar
const firstName = 'Michael';
const lastName = 'Gustavsson';
const startTeachingYear = 1992;
const thisYear = 2023;

const badWay =
  'My name is ' +
  firstName +
  ' ' +
  lastName +
  'I have been teaching for ' +
  (thisYear - startTeachingYear) +
  ' years.';

console.log(badWay);

// The right way...
// Template strings (interpolation)
const rightWay = `My name is ${firstName} ${lastName} I have been teaching for ${
  thisYear - startTeachingYear
} years`;

console.log(rightWay);

console.log();
