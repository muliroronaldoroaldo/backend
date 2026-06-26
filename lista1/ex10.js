const input = require ("readline-sync")

let texto = input.question("fala: ")
let letra = input.question("fala: ")
let cont = 0

function ronaldo(texto, letra){
    for(let i = 0; i < texto.length; i++){
        if(texto[i] === letra ){
            cont++
    }
}
return cont ;
}
console.log(ronaldo(texto, letra))