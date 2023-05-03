import { adjustCapitalization, adjustNaming } from './utilities.js';
import Movie from './Movie.js';
import state from './state.js';

// console.log('Test');

console.log(adjustNaming('javascript'));
console.log(adjustCapitalization('javascript är coolt!'));

const theBatman = new Movie('The Batman', 2022, '2 tim 56 min', 'Matt Reeves');

console.log(theBatman);
console.log(theBatman.title);

// console.log(API_URL);
// console.log(API_KEY);

console.log(state.api.baseUrl);
