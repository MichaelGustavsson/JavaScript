/*********************************************************/
//  Array.find()
/*********************************************************/

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// find tar ett argument predicate = funktion
// med funktionen kan vi söka efter något i listan
// find returnerar elementet om det finns...

// Variant 1.
// const found = numbers.find(function (number) {
//   return number === 11;
// });

// Variant 2.
const found = numbers.find((number) => number === 4);
console.log(found);

const actors = ['Bruce', 'Keenue', 'Julia', 'Chris', 'Julia'];
const actor = actors.find((actor) => actor === 'Julia');
console.log(actor);

/****************************************/
// Använder movies.js

console.log(movies);

let movie = movies.find((movie) => movie.id === 980489);
movie = movies.find((movie) => movie.title.startsWith('Fast X'));
movie = movies.find((movie) => movie.language === 'is');
movie = movies.find((movie) =>
  movie.overview.toLowerCase().startsWith('jonas')
);
console.log(movie);
