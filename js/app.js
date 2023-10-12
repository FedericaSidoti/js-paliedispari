
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
function isPalindrome (word, wordreverse) {
    if (word === wordreverse) {
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

/////SECONDO ESERCIZIO///////

//- chiedere all' utente se pari o dispari 
const teamRequest = prompt('scrivi PARI o DISPARI')
//- chiedere all'utente un numero da 1 a 5 
const numRequest = prompt('inserisci un numero da 1 a 5')
    if (numRequest === NaN || numRequest > 5 || numRequest < 1) {
        alert('il valore inserito non è valido') 
    }
const userNumber = parseInt(numRequest);
//- scrivere una funzione che generi un numero random da 1 a 5
let pcNumber = 0;
function generateRandomPCNumber(min, max) {
    pcNumber = Math.floor(Math.random() * (max - min + 1) ) + min;
    return pcNumber; 
}
//- salvare il return in una variabile pcNumber
pcNumber = generateRandomPCNumber(1, 5)
console.log(pcNumber)
//- scrivere una funzione somma 
let sum = 0;
function sumTwoNumbers (num1, num2) {
    sum = num1 + num2
    return sum
}
//- salvare il return in una variabile
sum = sumTwoNumbers (userNumber, pcNumber)
console.log(sum)
//- scrivere una funzione che verifichi se il numero è pari (true)
function isEven (num) {
    if (num % 2 === 0) {
        return true;
    } else {
        return false; 
    }
}
//- SE funzione = pari e prompt = pari OPPURE se funzione= nonpari e prompt = dispari
if (isEven(sum) === true && teamRequest === 'PARI' || isEven(sum) === false && teamRequest === 'DISPARI'){
    alert('HAI VINTO!')
} else {
    alert('HAI PERSO!')
}
//    - alert "hai vinto"

//- ALTRIMENTI 
//    - alert hai perso 

