/***********************************************************'*/
// Navigera DOM - Arbeta med element...
/***********************************************************'*/

/***********************************************************'*/
// Arbeta med Element...
/***********************************************************'*/

// Åtkomst till barn...
const items = document.querySelector('ul');
// console.log(items);
console.log(items.children);

// console.log(items.children[0].innerText);
// console.log(items.children[0].nodeName);
// console.log(items.children[0].nodeType);

// items.children[1].style.color = 'orange';
// items.children[1].innerText = 'Köp mjölk';
// items.firstElementChild.style.background = '#ddd';
// items.firstElementChild.style.color = '#0000ff';
// items.firstElementChild.innerText = 'Rasta hundarna';

// items.lastElementChild.innerText = 'Tvätta bilen';

// Åtkomst till förälder element via ett barn...
// const item = document.querySelector('li:nth-child(3)');
// console.log(item);
// console.log(item.parentElement);

// item.parentElement.style.border = 'solid 1px #333';
// item.parentElement.style.padding = '1rem';
// item.parentElement.style.display = 'none';

// Åtkomst till syskon element...
// console.log(item);
// console.log(item.nextElementSibling);

// item.nextElementSibling.style.color = '#ff00ff';
// item.nextElementSibling.style.fontWeight = 'bold';

// item.previousElementSibling.style.color = 'yellowgreen';
// item.previousElementSibling.style.fontWeight = 'bold';
// item.previousElementSibling.style.fontStyle = 'italic';

/***********************************************************'*/
// Arbeta med Noder...
/***********************************************************'*/

console.log(items.childNodes);
console.log(items.childNodes[0]);
console.log(items.childNodes[0].textContent);
console.log(items.childNodes[0].nodeName);
console.log(items.childNodes[0].nodeType);
console.log(items.childNodes[5].nodeType);
console.log(items.childNodes[5].nodeName);
console.log(items.childNodes[5].textContent);
console.log(items.childNodes[5].innerHTML);
console.log(items.childNodes[5].outerHTML);

items.childNodes[5].innerText = 'Köpa mjölk';
items.childNodes[5].style.color = '#ff0000';
items.childNodes[5].style.fontWeight = 'bold';

console.log(items.firstChild);
console.log(items.lastChild);

// items.lastChild.textContent = 'Titta nu är jag här!';

// Åtkomst till förälder noder ifrån barn...
const item = document.querySelector('li');
console.log(item);

item.parentNode.style.border = 'solid 1px #333';
item.parentNode.style.padding = '1rem';
item.parentNode.style.background = '#ddd';

// Åtkomst till syskon element...
const child = document.querySelector('li:nth-child(3)');
console.log(child);

console.log(child.nextSibling);
console.log(child.nextElementSibling);

console.log(child.previousSibling);
console.log(child.previousElementSibling);
