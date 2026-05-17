const input = require('readline-sync')

let par = 0
let impar = 0

for (let i = 1; i <= 10; i++) {
   let num = Number(input.question(`Digite o número ${i}: `))

    if (num % 2 === 0) {
        par++
    } else {
        impar++
    }
}

console.log(`pares: ${par}`)
console.log(`impares: ${impar}`)