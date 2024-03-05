// A partire da un array di stringhe, crea un secondo array formattando le stringhe del primo array in minuscolo e con l’iniziale maiuscola.
// Es: [‘pippo’, ‘PLUTO’, ‘Paperino’] => [‘Pippo’, ‘Pluto’, ‘Paperino’]

const firstArray = [ 'pippo', 'PLUTO', 'Papaerino']
//crea un secondo array formattando le stringhe del primo array in minuscolo e con l’iniziale maiuscola.
let secondArray = []
firstArray.forEach(word => {
    word = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    console.log(word);
});
