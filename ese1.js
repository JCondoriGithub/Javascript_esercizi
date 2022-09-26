//Scrivi un programma che dati quattro numeri, restituisca in output il maggiore e il minore. 

let a = 203;
let b = -338;
let c = -65;
let d = 714;

const numeri = [a, b, c, d];

let num1 = a;
let num2 = a;

for(let i = 0; i < numeri.length; i++) {

    if(num1 < numeri[i]) {
        num1 = numeri[i];
    }

    if(num2 > numeri[i]) {
        num2 = numeri[i];
    }
}

console.log("il numero più grande è: " + num1);
console.log("il numero più piccolo è: " + num2);