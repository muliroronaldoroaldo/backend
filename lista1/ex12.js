const input = require ("readline-sync")
let a = Number(input.question("fale o numero a: "))
let b = Number(input.question("fale o numero b: "))
let operacao = a

function calcular(a, b, sim){


    return sim(a, b)
}
console.log(calcular(a, b, (x, y) => x + y ))
console.log(calcular(a, b, (x, y) => x - y ))
console.log(calcular(a, b, (x, y) => x * y ))