/*********************************************/
// Custom sort...
/*********************************************/
const trans = [3000, -250, 200, 450, -50, 2000, 1000];
console.log(trans);
console.log(trans.sort());

/*
  Vi kan skapa våra egna anpassade sorteringsalgoritmer(comparer)
  som åsidosätter den inbyggda sort funktionen
  Sort funktion tar två argument (a,b)...

  om funktionens värde < 0 så kommer a att komma före b.
  om funktionens värde > 0 så kommer b att komma före a.
*/

// Sortera i stigande ordning (ascending)...
trans.sort((a, b) => {
  if (a > b) return 1;
  if (a < b) return -1;
});

console.log(trans);

// Sortera i fallande ordning(descending)...
trans.sort((a, b) => {
  if (a < b) return 1;
  if (a > b) return -1;
});

console.log(trans);

// Stigande ordning...
trans.sort((a, b) => a - b);
console.log(trans);

// Fallande ordning...
trans.sort((a, b) => b - a);
console.log(trans);
