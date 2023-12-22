/***************************************************/
// ShoppingList
/***************************************************/
// 1. Hämta in referenser till våra element...
// automatisk sändning av formuläret
const form = document.querySelector('#item-form');
// Få en referens till inmatningsfältet(textrutan)
const input = document.querySelector('#item-input');
// Få en referens till listan...
const list = document.querySelector('#item-list');
// Få en referens til "Töm Allt" knappen...
const clearButton = document.querySelector('#clear');

// 2. Skapa en händelsehanteringsfunktion...
const handleAddGrocery = (e) => {
  e.preventDefault();
  // 4. Hämta värdet ifrån textruta...
  const grocery = input.value;

  // Kontrollera så att textrutan inte är tom eller innehåller mellanslag enbart.
  if (grocery.trim().length === 0) {
    const errorMsg = createErrorMessage('Du måste ange en vara!');
    document.querySelector('.message-container').appendChild(errorMsg);
    input.value = '';
    return;
  }

  if (document.querySelector('#error-message')) {
    document.querySelector('#error-message').remove();
  }

  addGroceryToDOM(grocery);
  input.value = '';
};

const handleClearList = () => {
  while (list.firstChild) list.removeChild(list.firstChild);
};

const handleClickGrocery = (e) => {
  if (e.target.parentElement.classList.contains('btn-link')) {
    e.target.parentElement.parentElement.remove();
  }
};

// Refactoring av dom manipulering till separat funktioner...
const addGroceryToDOM = (grocery) => {
  const item = document.createElement('li');
  item.appendChild(document.createTextNode(grocery));
  item.appendChild(createIconButton('btn-link text-red'));
  list.appendChild(item);
  // const button = createIconButton('btn-link text-red');
  // item.appendChild(button);
};

const createIconButton = (classes) => {
  const button = document.createElement('button');
  const classList = classes.split(' ');
  classList.forEach((c) => button.classList.add(c));
  button.appendChild(createIcon('fa-regular fa-trash-can'));
  return button;
};

const createIcon = (classes) => {
  const icon = document.createElement('i');
  const classList = classes.split(' ');
  classList.forEach((c) => icon.classList.add(c));
  return icon;
};

// Felmeddelande funktion...
const createErrorMessage = (text) => {
  const div = document.createElement('div');
  div.id = 'error-message';
  div.classList.add('error-message');
  div.appendChild(document.createTextNode(text));
  return div;
};

// 3. Kopplar händelse till html elementen...
// Händelsehantering...
form.addEventListener('submit', handleAddGrocery);
clearButton.addEventListener('click', handleClearList);
list.addEventListener('click', handleClickGrocery);
