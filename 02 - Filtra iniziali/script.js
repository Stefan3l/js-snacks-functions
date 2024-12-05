/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];

// Dichiara la funzione qui.

/**
 * Check serve per filtrare i elementi di un array in base a una lettera iniziale
 * 
 * @param {array} Inserisci il nome del array
 * @param {lettera} Inserisci la lettera iniziale 
 * @returns {arrayNames} Risultato di elementi che iniziano con la lettera aggiunta
 */
let isNames = [];
const namesInitLateSame = (array, letInit) => {
        
    for ( i = 0; i <= array.length - 1; i++) {
        
        if( array[i].includes(letInit)) {
            isNames.push(array[i])
        }     
    }
    return isNames  
} 
    
// Invoca la funzione qui e stampa il risultato in console

const namesLetAdd = namesInitLateSame(names, "A")
console.log(namesLetAdd)

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]




