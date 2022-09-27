function somma() {

    let op1 = 1.0 * document.getElementById("op1").value;
    let op2 = 1.0 * document.getElementById("op2").value;
    let result;

    result = op1 + op2;

    document.getElementById("result").value = result;
}

function sottrazione() {

    let op1 = document.getElementById("op1").value;
    let op2 = document.getElementById("op2").value;
    let result;

    result = op1 - op2;

    document.getElementById("result").value = result;
}

function moltiplicazione() {

    let op1 = document.getElementById("op1").value;
    let op2 = document.getElementById("op2").value;
    let result;

    result = op1 * op2;

    document.getElementById("result").value = result;
}

function divisione() {

    let op1 = document.getElementById("op1").value;
    let op2 = document.getElementById("op2").value;
    let result;

    result = op1 / op2;

    document.getElementById("result").value = result;
}