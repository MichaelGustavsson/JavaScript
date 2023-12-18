/***********************************************************'*/
// Document Object Model Skapa element...
/***********************************************************'*/

// const div = document.createElement('div');

// div.className = 'fancy';
// div.setAttribute('id', 'nyDiv');
// div.setAttribute('title', 'min ny div');

// Gär inte så här...
// div.innerText = 'Här är min info';

// const textNode = document.createTextNode('Här är min bättre info');
// div.appendChild(textNode);

// console.log(div);

// document.querySelector('ul').appendChild(div);

// Metod 1.
function createListItem(item) {
  const li = document.createElement('li');

  li.innerHTML = `${item}
    <button class="remove-item btn-link text-red">
      <i class="fa-regular fa-trash-can"></i>
    </button>  
  `;

  document.querySelector('#item-list').appendChild(li);
}

// Metod 2.
function createItem(item) {
  // Steg 1.
  const li = document.createElement('li');
  // Steg 2.
  const text = document.createTextNode(item);
  // Steg 3.
  const button = document.createElement('button');
  button.className = 'remove-item btn-link text-red';
  // Steg 4.
  const icon = document.createElement('i');
  icon.className = 'fa-regular fa-trash-can';

  // Steg 5. Skapa element hierarkin...
  li.appendChild(text);
  li.appendChild(button);
  button.appendChild(icon);

  // Steg 6. Placera vårt ny listitem i ul elementet.
  document.querySelector('#item-list').appendChild(li);
}

createListItem('Potatis');
createItem('Grönsåpa');
createItem('Tvättmedel');
