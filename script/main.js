console.log('Js ok');
/*
* PAROLA PALINDROMA
*/
/*
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
*/


/*
* PARI E DISPARI
*/
// L’utente sceglie pari o dispari e un numero da 1 a 5.
var pariDispari = prompt('Scegli pari o dispari');
console.log('Hai scelto: ' + pariDispari);

var userNumber = parseInt(prompt('Scegli un numero da 1 a 5'));
console.log('Il tuo numero è: ' + userNumber);

// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Invocazione della function
var computerNumber = randomNumber(5);
console.log('Il numero del computer è: ' + computerNumber);

// Sommiamo i due numeri
var sum = userNumber + computerNumber;
console.log('La somma dei vostri numeri è: ' + sum);

// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Invocazione della function
if (parDisp(sum) == 'pari') {
  console.log('La somma dei vostri numeri è: ' + 'Pari')
}
else {
  console.log('La somma dei vostri numeri è: ' + 'Dispari');
};

// Dichiariamo chi ha vinto.
if (pariDispari == parDisp(sum)) {
  console.log('Hai vinto');
}
else {
  console.log('Hai perso');
};

// Functions
// Definizione della function
function randomNumber(number) {
  var functionNumber = Math.floor(Math.random() * number) + 1;

  return functionNumber;
};

// Definizione della function
function parDisp(num) {
  if (num % 2 == 0) {
    return 'pari';
  }
  return 'dispari';
};
