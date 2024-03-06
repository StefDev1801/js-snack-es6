// Crea un array di oggetti che rappresentano delle persone.
// Ogni persona ha un nome, un cognome e un’età.
const family =
[
    {
        nome:'Stefano',
        cognome:'Bellini',
        eta:22,
    },
    {
        nome:'Patrizia',
        cognome:'Bistocchi',
        eta:61,
    },
    {
        nome:'Mattia',
        cognome:'Palmeri',
        eta:17,
    },
    {
        nome:'Francesco',
        cognome:'Rossi',
        eta:12,
    },
    {
        nome:'Rebecca',
        cognome:'Fracasso',
        eta:34,
    },
];
// Crea quindi un nuovo array inserendo, per ogni persona, una frase con il nome e cognome e l’indicazione se può guidare, in base all’età.

/** 

const ICanDrive = family.filter((familymember) => {return familymember.eta > 17}).map((familyMember) => `${familyMember.nome} ${familyMember.cognome} ho la patente`);//filters con funzione di callback

// let IHaveLicence = ICanDrive.map((familyMember) => `${familyMember.nome} ${familyMember.cognome} ho la patente`);

const ICantDrive = family.filter((familymember) => {return familymember.eta <= 17}).map((familyMember) => `${familyMember.nome} ${familyMember.cognome} non ho la patente`);//filters con funzione di callback

// let IDoNotHaveLicence = ICantDrive.map((familyMember) => `${familyMember.nome} ${familyMember.cognome} non ho la patente`);

familyDescription = ICanDrive.concat(ICantDrive);

console.log(familyDescription);
*/


/** Questo non va
const adults = [];
const minors = [];

family.forEach((familyMember) =>{
    if (familyMember.age >= 18) {
        adults.push(familyMember) 
    }else{
        minors.push(familyMember)
    }
})
console.log(adults+'are adults');
console.log(minors+'are minors');
*/


//Più rapido rispetto al mio
const adults = family.map((person) => {
    if (person.eta >=18) {
       return person.canDrive = `${person.nome} ${person.cognome} can drive`
    }else {
       return person.canDrive = `${person.nome} ${person.cognome} cannot drive`
    }
})
console.log(adults);