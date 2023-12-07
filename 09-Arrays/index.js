/*******************************************************/
/*
  Array, listor, collection
  lagring av data sekventiellt 1,2,3,4,5,6,7,8
*/
/*******************************************************/
// 1. Enklaste möjliga sätt...
// numbers är en array...
// hakarna deklarerar att det är en array []
// det som finns inuti hakarna kallas för element...
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(numbers);

// 2. Skapa en array manuellt, används väldigt sällan...
// const numbers2 = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9);
// console.log(numbers);

// 3. Skapa en tom array...
// const numbers3 = [];
// console.log(numbers3);

// Ta reda på hur många element finns det i listan...
const length = numbers.length;
// console.log(length);

// Hämta ut ett element ur en lista...
const firstElement = numbers[0];
// console.log(firstElement);

// Hämta ut ett element på en angiven position...
// console.log(numbers[2]);

// Hämta ut det sista elementet ur listan...
// Det långa sättet...
const lastElement = numbers[numbers.length - 1];
// console.log(lastElement);

// console.log(numbers.at(-1));

// Lägga till ett nytt element sist, den krångliga vägen😂
numbers[numbers.length] = 10;
// console.log(numbers);

// Det bättre och tryggare sättet...
numbers.push(11);
// console.log(numbers);

// Vi kan lagra vad vi vill i en array/lista...
// Arbeta med strängar
const strings = ['Oskar', 'Linnea', 'Matilda', 'Marcus'];
// console.log(strings);

strings.push('Emma');
// console.log(strings);

// Arbeta med objekt...
const vehicles = [
  {
    make: 'BMW',
    model: 'X3e',
    modelYear: 2023,
    mileage: 10000,
  },
  {
    make: 'Mercedes',
    model: '500S',
    modelYear: 2017,
    mileage: 135000,
  },
];

// console.log(vehicles);

// const volvo = vehicles[vehicles.length - 1];
const volvo = vehicles.at(-1);
// console.log(volvo);

/*****************************************************************/
// Grundläggande metoder för att manipulera listor...
/*****************************************************************/
/*
const movies = ['Avatar', 'Batman Begins', 'The Bucket List'];
console.log(movies);
// 1. Lägg till en ny film...
movies.push('The Tomorrow War');
console.log(movies);

// 2. Lägg till en ny film först i listan...
movies.unshift('Wakanda Forever');
console.log(movies);

// Ta bort element...
// 3. Ta bort sista elementet...
movies.pop();
console.log(movies);

// 4. Ta bort första elementet...
movies.shift();
console.log(movies);

// 5. Ändra ordningen på listan...
movies.reverse();
console.log(movies);

// 6. Kontrollera om ett element existerar i listan...
// returnerar true eller false...
const exists = movies.includes('Avatar');
console.log(exists);

// 7. Ta reda på ett elements position(index)
const index = movies.indexOf('Avatar');
console.log(index);
console.log(movies[index]);

// 8. Skapa en ny array med endast utvalda element ur
//    grundlistan (movies)...
movies.push('The Tomorrow War');
movies.push('Wakanda Forever');
console.log(movies);

let list = movies.slice(3);
console.log(list);

// OBSERVERA ATT end ARGUMENTET EXLUDERAR SISTA ELEMENTET...
list = movies.slice(1, 2);
console.log(list);
console.log(movies);

// 9. Ta bort ett element ur en lista...
console.log('Originalet', movies);

const removedMovies = movies.splice(1, 1);
console.log(removedMovies);
console.log('Efter splice()', movies);
*/

/*****************************************************************/
//  Kombinera metoder genom att nästla eller kedja metoderna
//  efter varandra...
/*****************************************************************/
const movies = ['Avatar', 'Batman Begins', 'The Bucket List'];
console.log(movies);

// 10. Hämta ut element och ändra ordningen på presentationen.
let list = movies.splice(1, 2).reverse();
// list = movies.splice(1, 2).reverse();
// list = movies.splice(1, 2).reverse().toString().toLowerCase();
console.log(list);
console.log(movies);

// 11. Slå samman två stycken listor till en...
let allMovies = movies.concat(list);
console.log(allMovies);

// 12. Skapa en sträng av en lista med en separator...
const separatedList = allMovies.join(', ');
console.log(separatedList);
console.log(allMovies);

// 13.  Sortera en lista...
console.log(allMovies.sort());
