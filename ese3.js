/*
Progetta un algoritmo in Javascript che stampi tutte le coppie di numeri naturali
la cui somma è un numero intero a scelta.
*/

let numero = 10;
let count = numero;

for(let i = 0; i <= count; i++) {

    console.log(numero, i);
    numero = numero - 1;
}