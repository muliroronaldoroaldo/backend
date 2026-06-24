const input = require ("readline-sync")
let numA = Number(input.question("coloca o numero 1: "))
let numB = Number(input.question("coloca o numero 2: "))
let menor = 0

function menores(numA, numB){
    if(numA < numB)
        menor = numA
    return menor
}

console.log(menores(numA, numB))
