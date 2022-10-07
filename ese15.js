//  Scrivi un programma che dato un numero dispari stampi un rombo di lettere.

function rombo(num) {

    let s = Math.floor(num / 2);

    for(let i = 1; i <= num; i+=2) {

        let r = '';
        for( let j = 0; j < s; j++)
            r = r + ' ';

        s--;

        for(let j = 0; j < i; j++)
            r = r + '*';

        console.log(r)
    }

    let x = 1;
    for(let i = num-1; i > 0; i-=2) {

        let r = '';
        for(let j = 0; j < x; j++)
            r = r + ' ';

        x++;

        for(let j = 0; j < i-1; j++)
            r = r + '*';

        console.log(r)
    }
}

rombo(19);
