/*Palidroma
Chiedere all’utente di inserire una parola */

// Chiediamo all'utente di inserire una parola

const utente = prompt('inserisci una parola');





//Creare una funzione per capire se la parola inserita è palindroma //

// Funzione che controlla se una parola è palindroma

function isPalindroma(parola){

 // 1. Trasformiamo la stringa in un array di lettere
    // 2. Invertiamo l'array
    // 3. Ricostruiamo la parola al contrario



    const invertWord = parola.split('').reverse().join('');

// Confrontiamo la parola originale con quella invertita

    if (parola === invertWord ) {
        
        
        
          // Se sono identiche, la parola è palindroma
        return true;

    } else {
        
        
         // Altrimenti non è palindroma
        return false;
    }

}


 // Chiamiamo la funzione usando la parola inserita dall'utente

if(isPalindroma(utente)) {
    console.log('La parola è palindroma ');

} else {
    console.log('La parola non è palindroma');
}