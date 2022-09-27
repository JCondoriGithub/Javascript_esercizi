/*  Scrivi un programma che dato:
    a) Un numero totale di gatti
    b) Il numero dei gatti presenti in ogni fila
  Restituisca in output:
    - Il numero di file risultanti
    - Nel caso l'ultima fila risulti incompleta indicare il numero di gatti mancanti per completarla (quanti gatti mancano per arrivare a b?)*/

let a = 44;
let b = 3;

let file = Math.ceil(a / b);
console.log("numero di file: " + file);

let mancanti = a % b;
console.log("gatti mancanti: " + mancanti);