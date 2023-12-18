/*************************************************************/
//    Introduktion till DOM
/*************************************************************/
// Globalt objekt högst upp i hierarkin...
console.log(window);

console.log(window.document);
// Vi behöver inte använda window objektet för att komma
// åt document...
console.log(document);

// documentElement ger oss tillgång till sidans
// root element...
console.log(document.documentElement);

console.log(document.head);
console.log(document.head.children);
console.log(document.head.children[3]);
console.log(document.head.children[3].innerHTML);

console.log(document.links);
console.log(document.links[0]);

// document.body.innerHTML = '<h2>DOM är kul!</h2>';
// document.write('JavaScript är ett fantastiskt språk! 😁');

console.log(document.all);

console.log(document.doctype);
console.log(document.domain);
console.log(document.URL);
console.log(document.characterSet);
console.log(document.contentType);

document.links[0].className = 'link';
document.links[0].id = 'länkens-id';

console.log(document.links[0].classList);

console.log(document.links);
// Går ej att iterera en HTMLCollection
// document.links.forEach((link) => console.log(link));

// Så vi gör om den till en riktig Array...
const links = Array.from(document.links);

links.forEach((link) => console.log(link));
