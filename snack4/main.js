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
]
// Crea quindi un nuovo array inserendo, per ogni persona, una frase con il nome e cognome e l’indicazione se può guidare, in base all’età.

const ICanDrive = family.filter((familymember) => {return familymember.eta > 17}).map((familyMember) => `${familyMember.nome} ${familyMember.cognome} ho la patente`);//filters con funzione di callback

// let IHaveLicence = ICanDrive.map((familyMember) => `${familyMember.nome} ${familyMember.cognome} ho la patente`);

const ICantDrive = family.filter((familymember) => {return familymember.eta <= 17}).map((familyMember) => `${familyMember.nome} ${familyMember.cognome} non ho la patente`);//filters con funzione di callback

// let IDoNotHaveLicence = ICantDrive.map((familyMember) => `${familyMember.nome} ${familyMember.cognome} non ho la patente`);

familyDescription = ICanDrive.concat(ICantDrive);

console.log(familyDescription);