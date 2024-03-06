// Crea un array di 10 oggetti che rappresentano una zucchina, indicando per ognuna varietà, peso e lunghezza.

const zucchine = [
    {
        name: 'Zucca Romanesca',
        weight: 3,
        lenght: 10,
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
]

// Calcola quanto pesano tutte le zucchine.
let totalWeight = 0

zucchine.forEach(zucchina => {
    totalWeight += zucchina.weight;
});
console.log(totalWeight);