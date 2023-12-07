/*******************************************/
// Funktioner i JavaScript
/*******************************************/

/*
    Funktioner/metoder är ett sätt att gruppera kod/logik som 
    vi kan återanvända någon annanstans...

    Vi har 3 olika sätt att skapa funktioner på i JavaScript
    1.  Function Declarations
    2.  Function Expressions
    3.  Arrow Functions
*/

/*******************************************/
//    Function Declarations
/*******************************************/

// Detta fungerar tack vare eller på grund av
// Hoisting...
// writeToLog();

// Function Declarations...
// Ett annat namn är ibland "namngiven funktion"
// Använder vi nyckelordet function...
// Detta är en funktion som inte tar några argument
// och inte returnerar någonting...
function writeToLog() {
  console.log('Detta är ett meddelande ifrån funktion writeToLog');
}

writeToLog();
// writeToLog();
// writeToLog();
// writeToLog();

// Funktion som tar argument men inte returnerar något...
// argumentet är en namgiven variable som endast existerar
// i funktionen och som får värdet när funktionen anropas
function writeToLogWithArgs(message) {
  console.log(message);
}

writeToLogWithArgs('Detta är ett argument');
writeToLogWithArgs('Titta här');

// Funktion som tar argument och returnerar ett värde...
// nyckelordet return skickar tillbaka något till den
// som anropat funktionen...
function sayHello(name) {
  return `Hej på dig, ${name}`;
}

const result = sayHello('Jelena');
console.log(result);

const result1 = sayHello('Carl');
console.log(result1);

/*******************************************/
//    Function Expression
/*******************************************/
// Detta kallas oftast för anonyma funktioner...

const addMovie = function (title) {
  return `Sparar filmen "${title}"`;
};

console.log(addMovie);
console.log(addMovie('Mission Impossible'));

/*******************************************/
//    Arrow functions...
/*******************************************/
// Vi fick denna typ i ES6...

const movies = ['Avatar', 'Batman Begins', 'The Bucket List'];

const listMovies = () => movies;

console.log(listMovies());

const getMovie = (index) => movies[index];

console.log(getMovie(1));

// Om funktionen innehåller mer än en rad kod
// måste krullparenteser användas
const getLastMovie = () => {
  const index = movies.length - 1;
  return movies[index];
};

console.log(getLastMovie());

const getLastMovieOneLiner = () => movies.at(-1);
console.log(getLastMovieOneLiner());
