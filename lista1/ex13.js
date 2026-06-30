const input = require ("readline-sync")
let inicio = Number(input.question("escreva um numero: "))
let fim = Number(input.question("escreva outro numero: "))

function range(incio, fim){
        let lista = []
    for(let i = inicio; i <= fim; i++){
        lista.push(i)
    }
    return lista
}

function soma(lista){
    let som = 0
    for(let i = 0; i < lista.length; i++){
        som += lista[i];
    }
    return som
}

console.log(`${range(inicio, fim)}`)
console.log(soma(range(inicio, fim)))
