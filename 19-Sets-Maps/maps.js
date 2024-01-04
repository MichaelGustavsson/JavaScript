/*********************************************************/
// Datastructure Maps...
/*********************************************************/
// En lista med nyckel och värde par
// [1], {name: kalle, city: ankeborg}

// Skapa en Map(dictionary)...
const movies = new Map();
console.log(movies);

// För att lägga till ett nytt element i en Map används metoden set.
movies.set('title', 'Jurassic World');
movies.set('categories', ['Äventyr', 'Action']);
movies.set(true, 'Bananer i Pyjamas');
movies.set(1, 'Rating 3.5');

// console.log(movies);
// console.log(movies.get('title'));
// console.log(movies.get('categories'));
// console.log(movies.get(true));
// console.log(movies.get(1));

// console.log(movies.has(true));
// console.log(movies.has('categories'));
// console.log(movies.has('movie'));
// console.log(movies.has(false));

const vehicles = new Map();
vehicles.set('ABC123', { make: 'Volvo', model: 'V90' });
vehicles.set('DEF123', { make: 'Ford', model: 'Focus' });
vehicles.set('GHI123', { make: 'Volkswagen', model: 'Tiguan' });

console.log(vehicles);
const volvo = vehicles.get('ABC123');
console.log(volvo);

console.log(vehicles.keys());
console.log(vehicles.values());
console.log(vehicles.entries());

vehicles.forEach((vehicle) => {
  console.log(vehicle);
});

// GÅR INTE ATT GÖRA
// vehicles.filter((vehicle) => vehicle.make === 'Volvo');
const vehicleArray = Array.from(vehicles);
console.log(vehicleArray);
