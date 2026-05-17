const input = require('readline-sync')

let num1 = Number(input.question())
let num2 = Number(input.question())
let soma = num1 + num2
let mult = num1 * num2
let div = num1 / num2
let sub = num1 - num2

console.log("soma é: "+ soma)
console.log("mult é: "+ mult)
console.log("sub é: "+ sub)
console.log("div é: "+ div)