const input = require ("readline-sync")
let ba = Number(input.question("diga a base "))
let al = Number(input.question("diga a altura "))
let ar = ba * al
let per = 2 * (ba + al)
console.log("o perimetro é: ", per)
console.log("a area é: ", ar)