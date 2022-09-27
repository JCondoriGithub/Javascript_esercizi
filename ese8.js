/*  Scrivi un programma che dato un numero N, generi un array di N numeri casuali
  e stampi sia l'array ottenuto che quello invertito.*/

let numero = 5;

const arr = [];
for(let i = 0; i < numero; i++)
  arr.push(100 * Math.random());

console.log(arr);

const arrInv = [];
for(let i = 0; i < arr.length; i++)
  arrInv.unshift(arr[i]);
  
console.log(arrInv);