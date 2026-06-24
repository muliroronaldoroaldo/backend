const input = require("readline-sync")
let soma = 0

for ( let i = 1; i >= 50; i++){
    if (i % 2 === 0) {
        soma = soma + i
    }
} 
console.log(`a soma dos números pares é: ${soma}`)