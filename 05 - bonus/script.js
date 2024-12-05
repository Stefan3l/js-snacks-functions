/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const nameUser = 'Mario';


// Dichiara la funzione qui.

const sentence = (name, word) => (`${word} ${name}`);


// Invoca la funzione qui e stampa il risultato in console

const wordAddname = sentence(nameUser, "Ciao")
console.log(wordAddname)

//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.
let today = new Date()
const hours = today.getHours();
const minute = today.getMinutes()
console.log(hours, minute)
alert(`${hours} : ${minute}`)



if (`${hours}` >= 7 && `${hours}` <= 13) {
    alert(`Buongiorno ${nameUser}`)
}
else if (`${hours}` >= 14 && `${hours}` <= 17) {
    alert(`Buon pomeriggio ${nameUser}`)
}
else if(`${hours}` <= 23 || `${hours}` <= 6 ) {
    alert(`Buonasera ${nameUser}`)
}