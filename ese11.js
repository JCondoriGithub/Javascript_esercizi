/*  Scrivi un programma che prenda in input un array multidimensionale e stampi in output la sua trasposta.*/

const input = [
    [1,3,5],
    [2,4,6]
]

const output = [];

for(let i = 0; i < input[0].length; i++) {

    const arr = input.map(function(value) {
        return value[i];
    });

    output.push(arr);
}

console.log(output);