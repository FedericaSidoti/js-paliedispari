
// chiedere all'utente di inserire una parola
const wordRequest = prompt('Inserisci qui la tua parola e ti dirò se è palindroma')
// funzione per invertire la parola: l'ultima lettera deve essere la prima che leggiamo
//    -scomporre la parola in un array di lettere
let arrayLetters = []  
for ( let i = 0; i < wordRequest.length; i++) {
    let currentLetter= wordRequest.charAt(i)
    arrayLetters.push(currentLetter)
}
console.log(arrayLetters)


let arrayLettersreverse = arrayLetters.reverse()
console.log(arrayLettersreverse)

let reverseString

for( let i = 0; i < arrayLettersreverse.lenght; i++) {
    let currentLetter = arrayLettersreverse[i]
    reverseString = reverseString + currentLetter
}
console.log(reverseString)


function isPalindrome (array, arrayReverse) {
    if (array === arrayReverse) {
        return true;
    } else {
        return false; 
    }
}

if (isPalindrome(arrayLetters, arrayLettersreverse)) {
    alert("la parola è palindroma!")
} else {
    alert("questa parola non è palindroma")
}



//    -applicare array.reverse()
//- SE la parola e la parola invertita corrispondono
//    - allora alert "la parola è palindroma"
//- ALTRIMENTI 
//    - alert "la parola non è palindroma"