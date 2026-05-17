const input = require('readline-sync')

let num1 = Number(input.question())
for( let i = 1; i <= 10; i++) {
console.log(`${num1} X ${i} = ${num1 * i}`)
}