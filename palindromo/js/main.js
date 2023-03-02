let parolaInserita = prompt('inserisci una parola');

let parolaInvertita = InvertiOrdineParola(parolaInserita);
console.log(parolaInvertita);

let risultatoDom = document.getElementById('risultato')

if (parolaInvertita == parolaInserita){
  risultatoDom.innerHTML = `La parola che hai inserito è ${parolaInserita}, al contrario è ${parolaInvertita}, ed è palindroma!`
}
else{
    risultatoDom.innerHTML = `La parola che hai inserito è ${parolaInserita}, al contrario è ${parolaInvertita}, e non è palindroma!`
}

function InvertiOrdineParola(parolaUtente){
  let parolaAlContrario = '';

  for (let i = parolaUtente.length - 1; i >=0; i--){
    parolaAlContrario += parolaUtente[i];
  }

  return parolaAlContrario;
}