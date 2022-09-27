/*  Scrivi un programma che dato un numero di secondi, calcoli la quantità di ore, minuti e secondi corrispondenti e
  poi stampi il risultato. L'output avrà solo numeri interi.*/

let input = 7268;

let ora = 3600;
let minuti = 60;
let secondi = 1;

let countO = 0;
let countM = 0;
let countS = 0;

while(ora <= input) {

    ora += 3600;
    countO++;
}
ora -= 3600;
input -= ora;

while(minuti <= input) {

    minuti += 60;
    countM++;
}

minuti -= 60;
input -= minuti;

console.log("ore: " + countO);
console.log("minuti: " + countM);
console.log("secondi: " + input);