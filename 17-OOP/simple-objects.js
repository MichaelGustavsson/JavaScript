/*******************************************/
// Object Literals - enkla on-the-fly object
/*******************************************/
const movie = {
  title: 'Avatar',
  length: '2tim 40min',
  releaseYear: 2009,
  description: {
    short: 'En kort beskrivning',
    long: 'En längre beskrivning av filmen',
  },
  actors: [
    { firstName: 'Sam', lastName: 'Worthington' },
    { firstName: 'Zoe', lastName: 'Saldana' },
    { firstName: 'Sigorney', lastName: 'Weaver' },
  ],
  info: function () {
    return `Movie info: ${this.title} ${this.releaseYear} ${this.description.short}`;
  },
  test: function () {
    return this.title;
  },
  // getFirstActor: function () {
  //   return this.actors[0];
  // },
};

console.log(movie);
// console.log(movie.description.short);
// Anropa metoden info på movie objektet...
console.log(movie.info());

movie.getFirstActor = function () {
  return this.actors[1];
};

// Fungerar ej med this!!!
const func1 = () => {};

movie.actors.forEach((actor) => console.log(actor.firstName));
console.log(movie.actors[0].lastName);
console.log('GetFirstActor', movie.getFirstActor());
console.log('Test funktionen', movie.test());
// Kan även skapa objekt på följande sätt...
// 1.
// const vehicle = {};

// console.log(vehicle);

// Dynamiskt lägga till egenskaper...
// vehicle.model = 'XC60';

// console.log(vehicle);
// console.log(vehicle.model);

// 2. Använd typen Object i JavaScript...
// const grocery = new Object();
// grocery.name = 'Salt';
// console.log(grocery);
