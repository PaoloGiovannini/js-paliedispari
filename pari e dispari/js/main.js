let sceltaPariODispari = prompt("Scegli pari o dispari")

const sceltaNumero = parseInt(prompt("Scegli un numero da 1 a 5"));
console.log(`il numero scelto è ${sceltaNumero}`);

const numeroCasualeComputer = generaNumeroCasuale(1, 5);
console.log(`il numero scelto dal computer è ${numeroCasualeComputer}`);

const sommaNumeri = sceltaNumero + numeroCasualeComputer;
console.log(`la somma è ${sommaNumeri}`);

const controlloNumeroPariODispari = pariDispari(sommaNumeri)

if (sceltaPariODispari === controlloNumeroPariODispari) {
    console.log('Ha vinto il giocatore');
} else {
    console.log('Ha vinto il computer');
}

function generaNumeroCasuale(min, max) {
    const numeroCasuale = Math.floor( Math.random() * (max - min - 1) ) + min;
    return numeroCasuale;
}

function pariDispari(SommaNumeroUtenteComputer) {

    if (SommaNumeroUtenteComputer % 2 == 0) {
       return "pari";
    } else {
        return "dispari"
    }


}