
const sceltaNumero = parseInt(prompt("Scegli un numero da 1 a 5"));
console.log(`il numero scelto è ${sceltaNumero}`);

const numeroCasualeComputer = generaNumeroCasuale(1, 5);
console.log(`il numero scelto dal computer è ${numeroCasualeComputer}`);

const sommaNumeri = sceltaNumero + numeroCasualeComputer;
console.log(`la somma è ${sommaNumeri}`);


function generaNumeroCasuale(min, max) {
    const numeroCasuale = Math.floor( Math.random() * (max - min - 1) ) + min;
    return numeroCasuale;
}

