// Scrivi un programma che dato un array di 10 numeri interi ordinati in modo casuale li riordini in modo decrescente.

const a = [];
const cre = [];
const dec = [];

for(let i = 0; i < 10; i++)
    a.push(Math.round(Math.random() * 10));

for(let i = 0; i < 10; i++) {

    let n = a[0];

    for(let j = 0; j < a.length; j++) {
        if(n < a[j])
            n = a[j];
    }
    let index = a.indexOf(n);
    a.splice(index, 1);
    cre.unshift(n);
    dec.push(n);
}

console.log("decrescente: "+dec);
console.log("crescente: "+cre);