//Scrivi una funzione che accetti una stringa come argomento e la ritorni girata (es. Ciao -> oaiC)

const parolaDritta = prompt('scrivi una parola')

const parolaRovescioArray = []


//Ho usato for perché sono leno ad usare altre cose e bisogna sbrigarci
for (let i = parolaDritta.length; i >= 0; i--) {
    const lettera = parolaDritta[i];
    parolaRovescioArray.push(lettera)
}
const parolaRovescio = parolaRovescioArray.join('');
console.log(parolaRovescio);