//  Scrivi una funzione che calcoli in maniera iterativa (usando un ciclo) il fattoriale di un numero preso in input.

function calcFattoriale(input) {

    for(let i = input - 1; i > 0; i--) {

        input = input * i;
    }

    console.log("fattoriale: " + input);
}

calcFattoriale(5);