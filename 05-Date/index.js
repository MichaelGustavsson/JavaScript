/**************************************************/
// JavaScript Date...
/**************************************************/
// Date representerar antalet millisekunder som har gått sedan
// startdatumet för JavaScripts tidsmätning (epoch)
// 1970-01-01 00:00:00

// Skapa en instans av ett nytt Date objekt...
// 1. utan argument...
let currrentDate = new Date();
// console.log(currrentDate);

// 2. med endast datum sträng
let birthDate = new Date('1990-11-17');
// console.log('BirthDate', birthDate);

// 3. med både datum och tids angivelse som sträng
birthDate = new Date('1990-11-17T22:15:35');
// console.log('BirthDate', birthDate);

// 4. med endast datum sträng men med fullständig månad
birthDate = new Date('november 17 1990');
// console.log('BirthDate', birthDate);

// 5. med datum och tid som sträng men med fullständig månad
birthDate = new Date('november 17 1990 22:15:35');
// console.log('BirthDate', birthDate);

// 6. med datum som numerisk inmatning
birthDate = new Date(1990, 11, 17);
// console.log('BirtDate', birthDate);

birthDate = new Date(1990, 10, 17);
// console.log('BirtDate', birthDate);

// 7. med datum samt tid numeriskt
birthDate = new Date(1990, 10, 17, 22, 15, 35);
// console.log('BirtDate', birthDate);

// Metoder för att manipulera Date typen...
// Static metoder
// console.log('Current date and time', Date.now());
// console.log('Current date and time', Date.parse('2023-11-30'));

// Instans metoder...
// console.log(currrentDate);

// Få ut året...
// console.log(currrentDate.getFullYear());
// Få ut månaden...
// Januari = index 0...
// console.log(currrentDate.getMonth());
// Få ut datumet(dagen)
// console.log(currrentDate.getDate());
// Få ut veckans dag representerat som heltal
// console.log(currrentDate.getDay());

// console.log(currrentDate.getTimezoneOffset());
// Få timme
// console.log(currrentDate.getHours());
// console.log(currrentDate.getUTCHours());

// Få minuter
// console.log(currrentDate.getMinutes());

// Få sekunder
// console.log(currrentDate.getSeconds());

// epoch time
// console.log(new Date(0));

// Manipulera datum
let invoiceDate = new Date();
console.log('Faktura datum', invoiceDate);

let paymentDate = new Date();
paymentDate.setDate(invoiceDate.getDate() + 30);
console.log(paymentDate);
