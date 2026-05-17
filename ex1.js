const input = require('readline-sync')

let nome = input.question("seu nome é: ")
let idade = input.question("sua idade: ")
let cidade = input.question("cidade na qual vc mora: ")

console.log("meu nome é " + nome + " tenho " + idade + " anos e sou de " + cidade)