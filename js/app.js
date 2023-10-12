
// chiedere all'utente di inserire una parola
const wordRequest = prompt('Inserisci qui la tua parola e ti dirò se è palindroma')
//    -scomporre la parola in un array di lettere
let arrayLetters = []  
for ( let i = 0; i < wordRequest.length; i++) {
    let currentLetter= wordRequest.charAt(i)
    arrayLetters.push(currentLetter)
}
console.log(arrayLetters)
 //applicare il metodo array.reverse
let arrayLettersreverse = arrayLetters.toReversed()
console.log(arrayLettersreverse)
//riconvertire gli array in dati confrontabili
const wordReverse = arrayLetters.toString();
const wordStraight = arrayLettersreverse.toString();

// creare una funzione per verificare che la parola sia (vero) o non sia (falso) palindroma
function isPalindrome (word, wordReverse) {
    if (word === wordReverse) {
        return true;
    } else {
        return false; 
    }
}
//- SE la funzione è true
//    - allora alert "la parola è palindroma"
//- ALTRIMENTI 
//    - alert "la parola non è palindroma"
if (isPalindrome(wordStraight, wordReverse)) {
    alert("la parola è palindroma!")
} else {
    alert("questa parola non è palindroma")
}

//- chiedere all' utente se pari o dispari 
const teamRequest = prompt('scrivi PARI o DISPARI')
//- chiedere all'utente un numero da 1 a 5 
const numRequest = prompt ('inserisci un numero da 1 a 5')
    if (numRequest === NaN || numRequest > 5) {
        alert('il valore inserito non è valido') 
    }

//- scrivere una funzione che generi un numero random da 1 a 5
//    -salvare il return in una variabile numComputer
//- scrivere una funzione somma 
//    - salvare il return in una variabile
//- scrivere una funzione che verifichi se il numero è pari (true)
//- invocare la funzione somma con i parametri corretti
//- SE funzione = pari e prompt = pari OPPURE se funzione= nonpari e prompt = dispari
//    - alert "hai vinto"
//- ALTRIMENTI 
//    - alert hai perso 

