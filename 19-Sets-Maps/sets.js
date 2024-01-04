/*********************************************************/
// Datastructure Sets...
/*********************************************************/
// En array som inte tillåter dubletter...
// const manufacturers = [
//   'Volvo',
//   'Kia',
//   'Ford',
//   'Fiat',
//   'Volvo',
//   'Volkswagen',
//   'Mercedes',
// ];
const manufacturers = new Set([
  'Volvo',
  'Kia',
  'Ford',
  'Fiat',
  'Volvo',
  'Volkswagen',
  'Mercedes',
]);

console.log(manufacturers);
console.log(new Set('Michaaaaael'));
console.log(new Set());

// För att ta reda på hur många element används size egenskapen...
console.log(manufacturers.size);

// För att lägga ett nytt element använder add metoden
manufacturers.add('Jaguar');
manufacturers.add('Jaguar');
manufacturers.add('Jaguar');
manufacturers.add('Jaguar');
manufacturers.add('Jaguar');
manufacturers.add('Jaguar');
manufacturers.add('Jaguar');
manufacturers.add('Jaguar');
manufacturers.add('Jaguar');
manufacturers.add('Jaguar');
manufacturers.add('Jaguar');
manufacturers.add('Jaguar');
console.log(manufacturers);

// För att to bort ett element använder vi metoden delete
manufacturers.delete('Fiat');
console.log(manufacturers);

// Töm listan använd metoden clear.
manufacturers.clear();
console.log(manufacturers);

// Eliminimera dubbletter...
const manufacturersduplicates = [
  'Volvo',
  'Kia',
  'Ford',
  'Fiat',
  'Volvo',
  'Volkswagen',
  'Mercedes',
];

console.log(manufacturersduplicates);
// Steg 1.
// Konvertera till ett Set...
const noDuplicates = new Set(manufacturersduplicates);
console.log(noDuplicates);

// Steg 2.
// Konvertera tillbaka till en traditionell array...
const uniqueManufacturers = [...noDuplicates];
console.log(uniqueManufacturers);

console.log(uniqueManufacturers[1]);
console.log(uniqueManufacturers.reverse());

// Använder noDuplicates Set...
console.log(noDuplicates.has('Fiat'));
console.log(noDuplicates.entries());
console.log(noDuplicates.keys());
console.log(noDuplicates.values());
