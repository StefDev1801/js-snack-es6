// Crea un array composto da 10 automobili.
// Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).
console.log('test');
const automobili = 
[
    {
        marca: 'fiat',
        modello: 'panda',
        alimentazione: 'metano',
    },
    {
        marca: 'tesla',
        modello: 'model 3',
        alimentazione: 'elettrica',
    },
    {
        marca: 'Ferrari ',
        modello: 'LaFerrari',
        alimentazione: 'benzina',
    },
    {
        marca: 'fiat',
        modello: 'punto',
        alimentazione: 'gpl',
    },
    {
        marca: 'Volksvagen',
        modello: 'Golf',
        alimentazione:'metano',
    },
    {
        marca: 'Dacia',
        modello: 'Sandero',
        alimentazione: 'benzina',
    },
    {
        marca:'Fiat',
        modello: '500e',
        alimentazione: 'elettrica',
    },
    {
        marca: 'Chevrolet',
        modello: 'Kalos',
        alimentazione: 'gpl',
    },
    {
        marca: 'Ford',
        modello: 'Fiesta',
        alimentazione: 'diesel',
    },
    {
        marca:'Citroen',
        modello: 'Ami',
        alimentazione: 'elettrica',
    },
    //marca, modello e alimentazione(benzina, diesel, gpl, elettrico, metano)
]
// Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.

const benzina = automobili.filter((auto) => {return auto.alimentazione === 'benzina'})//filters con funzione di callback


//const diesel = automobili.filter((auto) => {return auto.alimentazione === 'diesel'})//filters con funzione di callback
//console.log(diesel);
//versione abbreviata
const diesel = automobili.filter(auto =>  auto.alimentazione === 'diesel')//filters con funzione di callback

const noBenzNoDies = automobili.filter((auto) => {return auto.alimentazione !== 'diesel' && auto.alimentazione !== 'benzina'})//filters con funzione di callback


// Infine stampa separatamente i 3 array.
console.log(benzina);
console.log(diesel); 
console.log(noBenzNoDies);


