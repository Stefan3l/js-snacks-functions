/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';
const vocali = ["a", "e", "i", "o", "u"]


// Dichiara la funzione qui.
let isVocali = [];

/**
 * 
 * @param {vocali} Aggiungi le vocale cercate
 * @param {word} Inserisci la parola che voi controlare
 * @returns {number} Risultato del numero di vocali trovate
 */

const vocaliInsideWord = (vocali, word) => {
    for( i = 0; i <= word.length; i++) {
    
        if(vocali.includes(word[i])) {
            isVocali.push(word[i])
        }
    }
    return isVocali
}

// Invoca la funzione qui e stampa il risultato in console

const numbVocaliWord = vocaliInsideWord(vocali, word)
console.log(numbVocaliWord)


//Risultato atteso se si passa 'javascript': 3 (a, a, i)





