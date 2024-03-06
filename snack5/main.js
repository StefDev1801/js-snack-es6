// console.log('test');
// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.

const bicycles = [
    {
        model:'Spectral CF 9',
        weight:15,
    },
    {
        model:'Commencal Meta HT AM Ride Hardtail',
        weight:14,
    },
    {
        model:'Ortler Van Dyck Trapeze',
        weight:18,
    },
    {
        model:'Bianchi Aria 2018',
        weight:8,
    },
    {
        model:'S4 S-Works Turbo Levo',
        weight:24,
    },
];
console.log(bicycles);
// Stampare in console la bici con peso minore utilizzando destructuring e template literal

let [firstBike] = bicycles;  
//console.log(firstBike);

let lightBike = firstBike.weight
console.log(firstBike.weight);

bicycles.filter(bicycle =>    {
    console.log(bicycle.weight);
    if (bicycle.weight <= firstBike.weight) {
        lightBike = bicycle
    }
    return lightBike
}
     
)

console.log(`The lighter bike is ${lightBike.model}`);