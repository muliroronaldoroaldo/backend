const input = require('readline-sync')

let nota1 = Number(input.question())
let nota2 = Number(input.question())
let nota3 = Number(input.question())
let nota4 = Number(input.question())
let nota5 = Number(input.question())

let media = (nota1 + nota2 + nota3 + nota4 + nota5) / 5

console.log(media)

if (media >= 60) {
    console.log("passou")
} else {
    console.log("reprovou")
}