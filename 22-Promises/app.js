/***********************************************************/
// Promises
/***********************************************************/

// Exempel 1.
// Skapa ett promise...
// let promise = new Promise((resolve, reject) => {
//   // Här kan det finnas kod som gör saker och ting
//   // Kanske går till en backend och hämtar data..
//   resolve('Är klar');
//   reject('Gick inge vidare!');
// });

// // Konsumera ett promise...
// promise
//   .then((result) => console.log(result))
//   .catch((error) => console.log(error))
//   .finally(console.log('Vi är klara'));

// const value = 0;
// let promise2 = new Promise(function (resolved, reject) {
//   if (value === 0) {
//     resolved('OK'); // fulfilled -- settled
//   } else {
//     reject('NOT OK för value är inte 0'); // rejected -- settled
//   }
// });

// // Konsumera promise2...
// const loadingIndicator = document.querySelector('h4');

// promise2
//   .then((result) => {
//     console.log(result);
//     console.log('Nu har jag tillgång till datat');
//     CarlsQuestion();
//   })
//   .catch((error) => console.log(error))
//   .finally((loadingIndicator.style.display = 'none'));

// function CarlsQuestion() {
//   console.log('Answer');
// }

// Exempel 3.
// async function loadData(url) {
//   let promise = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//       if (url === 'http://mysite.com') {
//         resolve('Allt är okidoki');
//       } else {
//         reject('Allt är INTE okidoki');
//       }
//     }, 3000);
//   });

//   return promise;
// }
// Konsumera loadData...
// Det gamla sättet...
// const response = loadData('http://mysite.se');
// response.then((data) => console.log(data)).catch((error) => console.log(error));

// async function initPage() {
//   const loadingIndicator = document.querySelector('h4');
//   // Det moderna sättet att konsumera promise baserad funktionalitet
//   // med Async/Await...
//   try {
//     // Försök att exekvera/köra följande kod...
//     const responseNew = await loadData('http://mysite.se');
//   } catch (error) {
//     console.log(`Hit kom jag ${error}`);
//   } finally {
//     loadingIndicator.style.display = 'none';
//     console.log('Jag är färdig');
//   }
// }

// Ett mer komplext och verklighetsbaserat exempel...
async function loadData(url) {
  // Skapa ett promise objekt...
  const promise = new Promise(function (resolve, reject) {
    // Skapa ett objekt av XMLHttpRequest
    let request = new XMLHttpRequest();
    // Öppna en kommunikationskanal och ange metod och url...
    request.open('GET', url);
    // När vi får svaret så får vi det i funktionern onload...
    request.onload = () => {
      // Vi testar status mot koden 200 som betyder allt gick bra
      // här finns ett resultat(response egenskapen)
      if (request.status === 200) {
        resolve(request.response);
      } else {
        reject('Det gick inge vidare');
      }
    };
    // Skicka anropet...
    request.send();
  });

  // Returnera vårt promise objekt...
  return promise;
}

async function initPage() {
  const url = 'https://jsonplaceholder.typicode.com/photos/1';

  // loadData(url)
  //   .then((data) => console.log(data))
  //   .catch((error) => console.log(error));

  try {
    const data = await loadData(url);
    console.log(data);
  } catch (error) {
    console.log(`Det gick fel: ${error}`);
  }
}

initPage();
