/**********************************************************************/
// Arbeta med objekt och inbyggda metoder
/**********************************************************************/

// Spread operatorn...
const obj1 = { a: 1, b: 2, c: 3 };
const obj2 = { x: 4, y: 5, z: 6 };
console.log(obj1);
console.log(obj2);

// Vi fick spread operatorn med version 2015 av EcmaScript...
// Vi kopierar allt ifrån ett objekt till ett annat objekt
const obj3 = { ...obj1, ...obj2 };
console.log(obj3);

// På den gamla goda tiden, före EcmaScript 2015...
// Hur vi kopierade objekt...
const obj4 = Object.assign({}, obj1, obj2);
console.log(obj4);

// List(array) av objekt...
const movies = [
  {
    title: 'Avatar',
    length: '2tim 40min',
    releaseYear: 2009,
    genre: 'Action Adventure',
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
  },
  {
    title: 'Uncharted',
    length: '1tim 50min',
    releaseYear: 2021,
    description: {
      short: 'En kort beskrivning',
      long: 'En längre beskrivning av filmen',
    },
    actors: [
      { firstName: 'Tom', lastName: 'Holland' },
      { firstName: 'Mark', lastName: 'Wahlberg' },
      { firstName: 'Antonio', lastName: 'Banderas' },
    ],
    info: function () {
      return `Movie info: ${this.title} ${this.releaseYear} ${this.description.short}`;
    },
    test: function () {
      return this.title;
    },
  },
];

console.log(movies);
console.log(movies[1].genre);
console.log(movies[1].actors[0].firstName);
console.log(movies[1].description.long);

// const movie = movies.find((movie) => movie.title === 'Avatar');
const movie = movies.find((movie) =>
  movie.actors.find((actor) => actor.firstName === 'Sam')
);
console.log(movie);

// Hur kan vi kontrollera om en egenskap finns i ett objekt?
// hasOwnProperty()
const movieTest = {
  title: 'Uncharted',
  length: '1tim 50min',
  releaseYear: 2021,
  description: {
    short: 'En kort beskrivning',
    long: 'En längre beskrivning av filmen',
  },
  actors: [
    { firstName: 'Tom', lastName: 'Holland' },
    { firstName: 'Mark', lastName: 'Wahlberg' },
    { firstName: 'Antonio', lastName: 'Banderas' },
  ],
  info: function () {
    return `Movie info: ${this.title} ${this.releaseYear} ${this.description.short}`;
  },
  test: function () {
    return this.title;
  },
};

// hasOwnProperty är en metod på objektet(MovieTest)...
console.log(movieTest.hasOwnProperty('title'));
console.log(movieTest.hasOwnProperty('genre'));

movieTest.genre = 'Action Comedy';
console.log(movieTest.hasOwnProperty('genre'));

// Använda static methods på Object typen...
// Object är typen keys är en metod på typen
// Hämta alla egenskaper och dess namn...
const properties = Object.keys(movieTest);
console.log(properties);

// Ta reda på hur många egenskaper det finns i objektet...
const propertiesLength = Object.keys(movieTest).length;
console.log(propertiesLength);

// Hämta alla värden för egenskaper i objektet..
const propertyValues = Object.values(movieTest);
console.log(propertyValues);

const propertyEntries = Object.entries(movieTest);
console.log(propertyEntries);

/*******************************************************************/
// Destructuring
// Vi kan plocka ut endast de egenskaper ur ett objekt
// som vi är intresserade av...
/*******************************************************************/

const { title, releaseYear, genre } = movieTest;
console.log(title, releaseYear, genre);
// console.log(movieTest.title)
console.log(movieTest);

// Använd spread operatorn för att kopiera en array...
const arr1 = ['a', 'b', 'c'];
const arr2 = ['d', 'e', 'f'];

console.log(arr1, arr2);

const arr3 = [...arr1, ...arr2];
console.log('arr3', arr3);

arr3[0] = 'q';
console.log(arr3, arr1);
