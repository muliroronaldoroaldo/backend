const input = require ("readline-sync")
let n = Number(input.question("diga o numero e veja se é par ou impar "))
let result = n%2===0?"par":"impar"
console.log("o numero é ", result)
