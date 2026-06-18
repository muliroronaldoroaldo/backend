const input = require ("readline-sync")
let c = input.question("diga a teperatura em celusius")
let fh = c * 1.8 + 32
console.log("a temperatura convertida em farenheit é: ", fh)