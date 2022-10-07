/*  Scrivi un programma che dato:
  - un array di 10 elementi di numeri casuali interi (compresi tra 1 e 90 senza ripetizioni),
  - un array di 10 numeri interi a tuo piacimento (compresi tra 1 e 90 senza ripetizioni)
  Verifichi quanti numeri scelti da te sono presenti nell'array principale e restituisca un risultato del tipo:
    2 numeri uguali => ambo
    3 numeri uguali => terna
    4 numeri uguali => quaterna
    5 numeri uguali => cinquina
    tutti i numeri uguali => tombola
  In caso di vittoria dovrà essere stampato un messaggio "Hai fatto X",
  in caso di perdita dovrà essere mostrato il messaggio "Mi dispiace, hai perso!".*/

const a = [];
const b = [38,29,87,77,53,89,67,88,28,7];

let count = 0;

while(count < 10) {

    let n = Math.ceil(Math.random() * 90);
    let isDoppio = false;

    for(let j = 0; j < a.length; j++)
        if(n == a[j])
            isDoppio = true;
            
    if(isDoppio == false) {
        a.push(n);
        count++;
    }
}

let c = 0;
for(let i = 0; i < a.length; i++)
    for(let j = 0; j < a.length; j++)
        if(a[i] == b[j])
            c++;
        
console.log("numeri uguali: "+c)
switch(c) {
    case 1:
        console.log("solo 1 numero uguale");
        break;
    case 2:
        console.log("ambo");
        break;
    case 3:
        console.log("terna");
        break;
    case 4:
        console.log("quaterna");
        break;
    case 5:
        console.log("cinquina");
        break;
    case 6:
        console.log("sestina");
        break;
    case 7:
        console.log("settina");
        break;
    case 8:
        console.log("ottina");
        break;
    case 9:
        console.log("ennina");
        break;
    case 10:
        console.log("tombola!");
        break;
}