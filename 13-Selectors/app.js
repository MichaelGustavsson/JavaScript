/*****************************************************/
// DOM Selectors
/*****************************************************/

/*****************************************************/
// LOKALISERA/HITTA ETT ELEMENT...
/*****************************************************/
// Det gamla sättet 😁
// document.getElementById...
console.log(document.getElementById('app-title'));

const pageTitle = document.getElementById('app-title');

// Läsa attribut...
console.log(document.getElementById('app-title').id);
console.log(document.getElementById('app-title').className);
// Rekommenderat att använda getAttribute istället.
console.log(document.getElementById('app-title').getAttribute('id'));
console.log(document.getElementById('app-title').getAttribute('class'));

// Skapa och skriva attribut...
pageTitle.setAttribute('title', 'Min lista');
// pageTitle.setAttribute('data-val', 'required');

// Läsa ut innehållet ur elementen...
console.log(pageTitle.textContent);
console.log(pageTitle.innerText);
pageTitle.innerText = 'Ändrat titel!';
pageTitle.innerHTML = '<strong>Viktigt!</strong>';

// Arbeta med stilar på elementen...
pageTitle.style.color = '#ff00ff';
pageTitle.style.backgroundColor = '#ddd';
pageTitle.style.background = '#ffff00';
pageTitle.style.borderRadius = '10px';
pageTitle.style.border = 'solid 1px #333';
pageTitle.style.padding = '1rem';

/*****************************************************/
// LOKALISERA/HITTA FLERA ELEMENT...
/*****************************************************/

// document.getElementsByTagName...
const listItems = document.getElementsByTagName('li');
console.log(listItems);

listItems[0].style.color = '#ff00ff';

// listItems.forEach((item) => (item.style.fontStyle = 'italic'));

for (let i = 0; i < listItems.length; i++) {
  const item = listItems[i];
  item.style.color = '#0000ff';
  item.style.fontWeight = '600';
  item.style.fontStyle = 'italic';
}

const listItemsArray = Array.from(listItems);
console.log(listItemsArray);

listItemsArray.forEach((item) => (item.style.color = '#ff0000'));

// document.getElementsByClassName...
const formControls = document.getElementsByClassName('form-control');
console.log(formControls);

console.log(formControls[0].children[0].placeholder);
formControls[0].children[0].placeholder = 'Att köpa';

// document.getElementsByName...
const formControls2 = document.getElementsByName('item');
console.log(formControls2);
console.log(formControls2[0].placeholder);

// Bättre och modernare sätt att lokalisera element...
// querySelector returnerar endast en förekomst...
console.log(document.querySelector('h1'));
console.log(document.querySelector('#app-title'));
console.log(document.querySelector('.page-title'));

console.log(document.querySelector('.container'));
console.log(document.querySelector('input[type="text"]'));
console.log(document.querySelector('ul'));
console.log(document.querySelector('ul li'));
console.log(document.querySelector('ul#item-list'));
console.log(document.querySelector('ul.items'));

console.log(document.querySelector('li:first-child'));
console.log(document.querySelector('li'));
console.log(document.querySelector('li:nth-child(4)'));
console.log(document.querySelector('li:nth-child(2)'));

let itemToChange = document.querySelector('li:nth-child(2)');
itemToChange.innerText = 'Gurka';
itemToChange.style.color = '#ff0000';
// console.log(itemToChange);

// querySelectorAll returnerar alla förekomster...
let items = document.querySelectorAll('li');
console.log(items);

items[0].style.backgroundColor = '#ddd';

items.forEach((item) => (item.style.backgroundColor = '#ddd'));

items = document.querySelectorAll('ul li');
console.log(items);
items = document.querySelectorAll('#item-list li');
console.log(items);
items = document.querySelectorAll('.items li');
console.log(items);
items = document.querySelectorAll('li');
console.log(items);
