console.log('Js ok');
/*
* PAROLA PALINDROMA
*/
// Chiedere all’utente di inserire una parola
var userWord = prompt('Inserisci una parola').toLowerCase();

// Creare una funzione per capire se la parola inserita è palindroma
// Invocazione della function
userWordReverse = reverseWord(userWord);
console.log(userWordReverse);

if (userWord == userWordReverse) {
  console.log('La parola ' + userWord + ' è palindroma');
}
else {
  console.log('La parola ' + userWord + ' non è palindroma');
}

// Definizione della function
function reverseWord(word) {
  var reverse = '';

  for (var i = word.length - 1; i >= 0; i--) {
    reverse += word[i];
  }

  return reverse;
};


/*
* PARI E DISPARI
*/
// L’utente sceglie pari o dispari e un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.
