
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
