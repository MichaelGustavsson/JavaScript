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
// Få en referens till filter inmatningen...
const filterInput = document.querySelector('#filter');

// Starta applikationen med rätt inställningar...
const initApp = () => {
  updateUI();
};
// 2. Skapa en händelsehanteringsfunktion...
const handleAddGrocery = (e) => {
  e.preventDefault();
  // 4. Hämta värdet ifrån textruta...
  const grocery = input.value;

  // Kontrollera så att textrutan inte är tom eller innehåller mellanslag enbart.
  if (grocery.trim().length === 0) {
    const errorMsg = createErrorMessage('Du måste ange en vara!');
    document.querySelector('.message-container').appendChild(errorMsg);

    // Automatiskt ta bort felmeddelandet efter 3sek(3000)...
    setTimeout(() => {
      document.querySelector('#error-message').remove();
    }, 3000);

    updateUI();
    return;
  }

  // Spara ner till localstorage...
  addToStorage(grocery);
  updateUI();
};

const handleClearList = () => {
  clearStorage();
  updateUI();
};

const handleClickGrocery = (e) => {
  if (e.target.parentElement.classList.contains('btn-link')) {
    removeFromStorage(e.target.parentElement.parentElement.textContent);
  }

  updateUI();
};

const handleFilterGroceries = (e) => {
  const groceries = document.querySelectorAll('#item-list li');
  const value = e.target.value;

  groceries.forEach((item) => {
    const itemValue = item.firstChild.textContent.toLowerCase();
    if (itemValue.indexOf(value) !== -1) {
      item.style.display = 'flex';
    } else {
      item.style.display = 'none';
    }
  });
};

// Refactoring av dom manipulering till separat funktioner...
const addGroceryToDOM = (grocery) => {
  const item = document.createElement('li');
  item.appendChild(document.createTextNode(grocery));
  item.appendChild(createIconButton('btn-link text-red'));
  list.appendChild(item);
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

const updateUI = () => {
  input.value = '';
  // Radera det som finns i DOM...
  // Alltså listan med varor...
  while (list.firstChild) list.removeChild(list.firstChild);

  const groceryList = getFromStorage();
  groceryList.forEach((grocery) => addGroceryToDOM(grocery));

  if (groceryList.length === 0) {
    clearButton.style.display = 'none';
    filterInput.style.display = 'none';
  } else {
    clearButton.style.display = 'block';
    filterInput.style.display = 'block';
  }
};

// Arbeta med LocalStorage...
// Lägga till...
const addToStorage = (grocery) => {
  const groceries = getFromStorage();
  groceries.push(grocery);
  // setItem som tar två argument 1. namnet på nyckeln(key) 2. värdet som sträng...
  localStorage.setItem('groceries', JSON.stringify(groceries));
};

// Hämta ut...
const getFromStorage = () => {
  let groceries;

  if (localStorage.getItem('groceries') === null) {
    groceries = [];
  } else {
    groceries = JSON.parse(localStorage.getItem('groceries'));
  }

  return groceries;
};

// Tar bort en vara...
const removeFromStorage = (grocery) => {
  let groceries = getFromStorage();
  groceries = groceries.filter((item) => item !== grocery);
  localStorage.setItem('groceries', JSON.stringify(groceries));
};

// Tömmer hela LocalStorage...
const clearStorage = () => {
  localStorage.removeItem('groceries');
};

// 3. Kopplar händelse till html elementen...
// Händelsehantering...
document.addEventListener('DOMContentLoaded', initApp);
form.addEventListener('submit', handleAddGrocery);
clearButton.addEventListener('click', handleClearList);
list.addEventListener('click', handleClickGrocery);
filterInput.addEventListener('input', handleFilterGroceries);
