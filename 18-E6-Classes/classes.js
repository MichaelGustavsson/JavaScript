/*********************************************************/
// E6 klasser...
/*********************************************************/
// En klass som heter Movie...
// Tillstånd, vad för data ska klassen kunna hantera/lagra i objekt...
// Beteende, vad ska vi kunna utföra med ett objekt
class Movie {
  // Konstruktorn är det första som exekveras(körs)
  // när objektet skapas.
  constructor(title, releaseYear) {
    // Skapar en egenskap title och sätter värdet ifrån argumentet title...
    this.title = title;
    this.releaseYear = releaseYear;
    console.log('Kör konstruktorn');
  }
  // Här skapar vi en metod i E6 klasser...
  info() {
    return `${this.title} | ${this.releaseYear}`;
  }
}

// En instans(kopia) av typen(klassen Movie)...
const avatar = new Movie('Avatar', 2006);
const batman = new Movie('Batman Begins', 2008);
const uncharted = new Movie('Uncharted', 2023);

batman.title = 'The Batman';

const info = avatar.info();

console.log(avatar);
console.log(batman);

console.log(info);
