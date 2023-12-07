/***********************************************************'*/
// Array.reduce()...
/***********************************************************'*/

// Används för att ackumulera värden vi har i en array

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Ett dåligt exempel...
function calculateTotal() {
  let acc = 0;
  for (let currentValue of numbers) {
    acc += currentValue;
    // console.log(currentValue, acc);
  }
  return acc;
}

const totalSum = calculateTotal();
// console.log(totalSum);

// Ett mera modernt sätt...
const totalValue = numbers.reduce((acc, currentValue) => acc + currentValue);
// console.log(totalValue);

// Kundvagns exempel...
const cart = [
  { id: 1, product: 'Slip papper', price: 50, quantity: 2 },
  { id: 2, product: 'Polermaskin', price: 2450, quantity: 1 },
  { id: 3, product: 'Rubbing, flytande', price: 179, quantity: 1 },
  { id: 4, product: 'Startbatteri', price: 2678, quantity: 1 },
];

console.log(cart);

const cartTotal = cart.reduce((acc, product) => {
  return (acc += product.price);
}, 0);

const cartQuantity = cart.reduce((acc, product) => {
  return (acc += product.quantity);
}, 0);

console.log(cartTotal);
console.log(cartQuantity);
