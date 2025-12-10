//Pari e Dispari

//L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.

//Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).

//Sommiamo i due numeri

//Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)

//Dichiariamo chi ha vinto. */


// Chiediamo all'utente di scegliere pari o dispari
const userChoiche = prompt("scegli: 'pari' o 'dispari' ");

// Chiediamo all'utente un numero da 1 a 5
const userNumber = parseInt(prompt("inserisci un numero da 1 a 5"));


// Funzione che genera un numero casuale tra 1 e 5
function randomNumber(numero) {
    
     // Math.random() → numero tra 0 e 1
    // * 5 → numero tra 0 e 5 (non incluso)
    // Math.floor(...) → toglie i decimali
    // + 1 → sposta il range a 1–5
    
    
    return Math.floor(Math.random() * 5 ) + 1;
}

// Numero generato dal computer

const pcNumber = randomNumber() ;

console.log("numero utente:", userNumber);

console.log("numero computer:", pcNumber);


// Sommiamo il numero dell'utente e quello del computer
const somma = userNumber + pcNumber;
console.log("Somma:", somma);


// Funzione per capire se un numero è pari
function isPari(num) {
    return num % 2 === 0;
 // num % 2 → resto della divisione per 2
    // se il resto è 0 → è pari

}

// Controlliamo se la somma è pari o dispari
const risultato = isPari(somma) ? "pari" : "dispari";

// Operatore ternario:
// if (isPari(somma)) → "pari"
// else → "dispari"


// Confrontiamo il risultato con la scelta dell'utente

if (risultato === userChoiche) {
    console.log("Hai vinto!");
} else {
    console.log("Hai perso!");
}















