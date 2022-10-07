/*Scrivi una funzione che prenda in input un numero e restituisca TRUE se è un numero primo, FALSE altrimenti.
Scrivi una seconda funzione, che prenda in input un numero N e stampi i primi N numeri primi.*/

function isPrimo(num) {

    let isPrime = true;

    for(let i = 2; i < num; i++)
        if(num % i == 0) {
            isPrime = false;
            break;
        }

    if(isPrime)
        return true;
    else
        return false;
}

console.log(isPrimo(21));

function listPrimi(num2) {

    let c = 0;
    let i = 2;
    while(c < num2) {
        if(isPrimo(i)) {
            console.log(i);
            c++;
        }
        i++;
    }
}

listPrimi(21);