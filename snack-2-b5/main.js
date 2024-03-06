// Crea 10 oggetti che rappresentano una zucchina.

const zucchine = [
    {
        name: 'Zucca Romanesca',
        weight: 3,
        lenght: 19,
    },
    {
        name: 'Zucca Trombetta',
        weight:4,
        lenght:11,
    },
    {
        name: 'Zucca Costata',
        weight:5,
        lenght:12,
    },
    {
        name: 'Zucca crookneck',
        weight:6,
        lenght:13,
    },
    {
        name: 'Zucca zucchini rampicante',
        weight:7,
        lenght:14,
    },
    {
        name: 'Zucca Laziale',
        weight: 3,
        lenght: 15,
    },
    {
        name: 'Zucca Chitarra',
        weight:4,
        lenght:16,
    },
    {
        name: 'Zucca Filo',
        weight:5,
        lenght:17,
    },
    {
        name: 'Zucca crookfoot',
        weight:6,
        lenght:18,
    },
    {
        name: 'Zucca zucchini cadente',
        weight:7,
        lenght:10,
    },
]

// Dividi in due array separati le zucchine che misurano meno o più di 15cm.
const zucchinaCorta = zucchine.filter((zucchina) => {return zucchina.lenght < 15})
console.log(zucchinaCorta);

const zucchinaLunga = zucchine.filter((zucchina) => {return zucchina.lenght >= 15})
console.log(zucchinaLunga);

// Infine stampa separatamente quanto pesano i due gruppi di zucchine.
let weightZucchinaCorta = 0
let weightZucchinaLunga = 0

zucchinaCorta.forEach(zucchina => weightZucchinaCorta += zucchina.weight);
console.log(weightZucchinaCorta);

zucchinaLunga.forEach(zucchina => weightZucchinaLunga += zucchina.weight);
console.log(weightZucchinaLunga);
