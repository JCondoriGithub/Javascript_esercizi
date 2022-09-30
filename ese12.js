/*- Prenda in input due numeri, N e M.
  - Generi una matrice di NxM popolata di valori casuali da 1 a 100.
  - Stampi la matrice e la somma di tutti i valori contenuti.*/

let N = 3;
let M = 5;
const matrice = [];
let tot = 0;

let i = 0;
while(i < N) {
  const arr = [];
  let j = 0;
  while(j < M) {
    let e = Math.floor(Math.random()*100)+1;
    console.log(e)
    tot += e;
    arr.push(e);
    j++;
  }
  matrice.push(arr);
  i++;
}
console.log(matrice);
console.log("la somma dei valori è: " + tot)