/*******************************************************/
// Constructor Functions...
// Skapar vi en mall över vilka egenskaper samt metoder
// som ett objekt ska ha...
/*******************************************************/

// Här skapar vi en ny typ (Movie)
// Constructor function...
// Vi skapa en klass...
function Movie(title, releaseYear, length, director) {
  // Här definierar vi egenskaper...
  this.title = title;
  this.releaseYear = releaseYear;
  this.length = length;
  this.director = director;
  // Vi kan skapa metoder(funktioner)...
  this.info = function () {
    return `${this.title} ${this.releaseYear} ${this.director}`;
  };
}

// Vi instantierar en kopia av typen Movie till objektet uncharted
const uncharted = new Movie(
  'Uncharted',
  2021,
  '1 tim 50 min',
  'Ruben Fleisher'
);

console.log(uncharted.info());
// Vi instantierar en kopia av typen Movie till objektet batman
const batman = new Movie(
  'Batman Begins',
  2008,
  '1 tim 55 min',
  'Christopher Nolan'
);

console.log(batman.info());
batman.length = '2 tim 10 min';
console.log(batman);

// Kika på constructor
console.log(batman.constructor);

const myDate = new Date();
console.log(myDate);

function test() {}

const myTest = new test();
// console.log(myTest, myTest.constructor);

// instanceOf används för att kontrollera om objektet är av
// en specifik typ(klass)...
console.log(batman instanceof Movie);
console.log(test instanceof Movie);

// Dynamisk lägga till nya egenskaper...
uncharted.genre = 'Action Comedy';
console.log(uncharted);
console.log(batman);

// Dynamiskt lägga metoder...
batman.add = function (title) {
  this.title = title;
};

// GÅR INTE ATT GÖRA!!!
// batman.add = (title) => {
//   this.title = title;
// };

batman.add('The Batman');
console.log(batman);

// Dynamiskt ta bort metoder ifrån ett objekt...
// Ta bort metoden info().
delete batman.info;
delete batman.add;
console.log(batman);

batman.title = '';
// delete batman.title;
console.log(batman);
