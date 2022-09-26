/*
Scrivi un programma che dato l’anno corrente e un anno di nascita determini:
-l’età della persona
-quanti anni sono necessari per raggiungere i 100
*/

let annoCorrente = 2022;
let annoNascita = 1996;

let eta = annoCorrente - annoNascita;
let etaMancanti = 100 - eta;

console.log("età: " + eta);
console.log("mancano: " + etaMancanti + " anni per i cento");