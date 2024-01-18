// Explicit typ annotering...
let movieTitle: string;
let movieLength: number;
let isAction: boolean;
let director: string[];
let category: string[];
let actors: string[];

movieTitle = 'Equalizer 3';
movieLength = 140;
isAction = true;
director = ['Christopher Nolan'];
category = ['Action', 'Drama'];

// Implicit typ annotering...
// type inference...
let make = 'Volvo';
let model = 'V90';
let modelYear = 2018;

make = 'Fiat';
// Funkar inte...
// make =  true;
