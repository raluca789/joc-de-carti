const simboluri = ['Inima rosie', 'Romb', 'Inima neagra', 'Trefla'];
const valori = [
  'Ace',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  'Jack',
  'Queen',
  'King',
];
let numeJucatori = ['Maria', 'Ion', 'Andrei', 'Andreea'];

function initPachet() {
  let pachet = [];

  for (const simbol of simboluri) {
    for (const valoare of valori) {
      const carte = {
        simbol: simbol,
        valoare: valoare,
      };
      pachet.push(carte); //pune cartea in pachet
    }
  }

  return pachet;
}

function amestecarePachet(pachet) {
  for (var i = pachet.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = pachet[i];
    pachet[i] = pachet[j];
    pachet[j] = temp;
  }
}

function impartireCarti(pachet, numeJucatori, cartiInMana) {
  const cartiPerJucator = {};

  for (const numeJucator of numeJucatori) {
    cartiPerJucator[numeJucator] = [];
  }

  // Impartire carti
  for (let i = 0; i < cartiInMana; i++) {
    for (const numeJucator of numeJucatori) {
      const carte = pachet.pop();
      cartiPerJucator[numeJucator].push(carte);
    }
  }

  return cartiPerJucator;
}

const pachetInitializat = initPachet();
console.log(pachetInitializat);

amestecarePachet(pachetInitializat);
console.log(pachetInitializat.length);

//cartiInMana este 5 in cazul nostru
const cartiImpartite = impartireCarti(pachetInitializat, numeJucatori, 5);
console.log(cartiImpartite);
