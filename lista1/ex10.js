const input = require ("readline-sync")
let texto = input.question("fala: ")
let letra = input.question("fala: ")
let cont = 0
function ronaldo (texto, letra){
for(i = 0; i <= texto.lenght; i++){
    if(texto[i] === letra ){
        cont++;
    }
}

console.log(`A letra ${letra} aparece ${cont} vezes`);