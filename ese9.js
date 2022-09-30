/*  Scrivi un programma che dato il numero dei tiri da effettuare per ciascun giocatore (N),
  simuli un gioco di dadi tra due utenti, stampando il giocatore che ha totalizza più punti.
  Supponendo che ogni dado abbia al massimo 6 facce.
  Ogni giocatore tirerà il dado N volte, ciò significa che verrà generato un numero casuale
  ad ogni tiro che sarà sommato ai precedenti per calcolare il punteggio del giocatore.*/

let giocatore1 = 0;
let giocatore2 = 0;

let numTiri = Math.round(Math.random()*10);

for(let i = 0; i < numTiri; i++) {

  let dado = Math.floor(Math.random()*6)+1;
  let dado2 = Math.floor(Math.random()*6)+1;

  giocatore1 += dado;
  giocatore2 += dado2;
}

if(giocatore1 > giocatore2)
  console.log("vince il giocatore 1 con: " + giocatore1);
  else
    console.log("vince il giocatore 2 con: " + giocatore2);