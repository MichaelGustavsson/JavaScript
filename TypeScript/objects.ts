type Movie = {
  title: string;
  length: number;
  director: string;
  actors?: string[];
};

const batman: Movie = {
  title: 'Batman Begins',
  length: 128,
  director: 'Christopher Nolan',
};

const avatar: Movie = {
  title: 'Avatar',
  length: 180,
  director: 'James Cameron',
};

// Type deklaration av hur en bil ska registeras i systemet...
type Vehicle = {
  readonly id: number;
  regNo: string;
  make: string;
  model: string;
  modelYear: number;
  mileage: number;
};

const volvo: Vehicle = {
  id: 1,
  regNo: 'ABC123',
  make: 'Volvo',
  model: 'V40',
  modelYear: 2017,
  mileage: 86790,
};

// Går ej att ändra(readonly)...
// volvo.id = 34
volvo.mileage = 75670;

type Color = {
  color: string;
};

// intersection types
type Car = Vehicle & Color;

const fiat: Car = {
  id: 2,
  regNo: 'DEF123',
  make: 'Fiat',
  model: 'Uno',
  modelYear: 1998,
  mileage: 235000,
  color: 'Äckelgrön',
};

// const bmw: Car = {
//   id: 2,
//   regNo: 'DEF123',
//   model: 'Uno',
//   modelYear: 1998,
//   mileage: 235000,
//   color: 'Äckelgrön',
// };

type VehicleGearType = {
  numberOfGear: number;
};

// type HorsePower = {
//   horsePower: number
// }

type superDuperCar = Car & VehicleGearType & { horsePower: number };

const mySuperCar: superDuperCar = {
  id: 2,
  regNo: 'DEF123',
  make: 'Fiat',
  model: 'Uno',
  modelYear: 1998,
  mileage: 235000,
  color: 'Äckelgrön',
  numberOfGear: 12,
  horsePower: 1000,
};

console.log('Vehicle', volvo);
console.log('Car', fiat);
console.log('SuperDuperCar', mySuperCar);
