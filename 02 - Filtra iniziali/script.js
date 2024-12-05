/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];

// Dichiara la funzione qui.

const namesInitLateSame = (array, letInit) => {
        
    for ( i = 0; i <= array.length - 1; i++) {
        
        if( array[i].includes(letInit)) {
        }       
        return array[i]

    }
} 
    


// Invoca la funzione qui e stampa il risultato in console

const namesLetAdd = namesInitLateSame(names, "A")
console.log(namesLetAdd)

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]




