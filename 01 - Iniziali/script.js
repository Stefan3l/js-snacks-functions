/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];

// Dichiara la funzione qui.

/**
 * Check per avere solo il primo caratere da un elemento di un array
 *
 * @param {array} Il array iniziale
 * @returns {array} Il risultato e solo il primo caratere di un elemnto del array
 * 
 */

const isLetInitial = (array) => {
        let initialLet = [];
        for(let i = 0; i <= names.length - 1; i++) {   
        initialLet.push(names[i][0])     
    }
    return initialLet
}

// Invoca la funzione qui e stampa il risultato in console

const letInitialsArray = isLetInitial(names)
console.log(letInitialsArray)

//Risultato atteso: ["A", "L", "M", "A", "G", "A"]


