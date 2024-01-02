function Movie(title, releaseYear, length, director) {
  this.title = title;
  this.releaseYear = releaseYear;
  this.length = length;
  this.director = director;
}

const batman = new Movie(
  'Batman Begins',
  2008,
  '2 tim 10',
  'Christopher Nolan'
);

console.log(batman);

// Addera dynamiskt till typen(klassen)...
Movie.prototype.info = function () {
  return `${this.title} ${this.releaseYear} ${this.director}`;
};

Movie.prototype.add = function (title) {
  this.title = title;
};

batman.add('The Batman');
console.log('BATMAN', batman);
console.log(batman.info());

const uncharted = new Movie(
  'Uncharted',
  2021,
  '1 tim 50 min',
  'Ruben Fleisher'
);

uncharted.add('Uncharted 2');
console.log('UNCHARTED', uncharted);
console.log(uncharted.info());

console.log(Object.getPrototypeOf(batman));

/***********************************************************/
// Ett alternativt sätt att skapa typer/objekt
/***********************************************************/
// const moviePrototype = {
//   add: function (newTitle) {
//     console.log(newTitle);
//     this.title = newTitle;
//   },
//   info: function () {
//     return `${this.title} ${this.releaseYear} ${this.director}`;
//   },
// };

// // Factory metod...
// function createMovie(title, releaseYear, length, director) {
//   return Object.create(moviePrototype, {
//     title: { value: title },
//     releaseYear: { value: releaseYear },
//     length: { value: length },
//     director: { value: director },
//   });
// }

// const uncharted = createMovie(
//   'Uncharted',
//   2021,
//   '1 tim 50 min',
//   'Ruben Fleisher'
// );

// uncharted.add('Uncharted 2');
// uncharted.title = 'Uncharted 2';
// // console.log(uncharted.info());
// // console.log(uncharted);

// console.log(uncharted.title);
