// Creare un array di oggetti di squadre di calcio.
// Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.

const squadreDiCalcio = [
    { nome: "Juventus", punti: 0, falliSubiti: 0 },
    { nome: "Inter", punti: 0, falliSubiti: 0 },
    { nome: "Milan", punti: 0, falliSubiti: 0 },
    { nome: "Roma", punti: 0, falliSubiti: 0 },
    { nome: "Napoli", punti: 0, falliSubiti: 0 }
];
// console.log(squadreDiCalcio);
// Generare numeri random al posto degli 0 nelle proprietà: punti fatti e falli subiti.

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

squadreDiCalcio.forEach(squadra => {
        squadra.punti = getRndInteger(0,30)
        squadra.falliSubiti = getRndInteger(30,200)
});

// console.log(squadreDiCalcio);



// Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

let onlyNameAndfails = []
onlyNameAndfails = squadreDiCalcio.map(squadra => {
    let {nome, falliSubiti} = squadra
    return { nome, falliSubiti };
});

console.log(onlyNameAndfails);