// Bas typ, enkel grundläggande constructor function...
function Movie(title, releaseYear) {
  this.title = title;
  this.releaseYear = releaseYear;
}

// const movie1 = new Movie('my new movie', 2023);
// console.log(movie1);

// Specialiserad typ som ärver det som finns i Movie typen...
function Action(title, releaseYear, length) {
  Movie.call(this, title, releaseYear);
  this.length = length;
}

// Specialiserad type som ärver det som finns inte bara ifrån Action
// hör och häpna även ifrån Movie typen...
function ActionComedy(title, releaseYear, length, grade) {
  Action.call(this, title, releaseYear, length);
  this.grade = grade;
}

// Ärver Movie
Action.prototype = Object.create(Movie.prototype);
ActionComedy.prototype = Object.create(Action.prototype);

// Länka konstruktorn i Action korrekt...
Action.prototype.constructor = Action;
ActionComedy.prototype.constructor = ActionComedy;

const batman = new Action('The Batman', 2022, '2 tim 48 min');
const uncharted = new Action('Uncharted', 2023, '1 tim 50 min');
const movie1 = new ActionComedy('Title', 2024, '3 tim 48 min', 2.6);

console.log(batman);
console.log(uncharted);
console.log(movie1);
