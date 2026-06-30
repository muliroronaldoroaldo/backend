const input = require ("readline-sync")
let idade = input.question("fale sua idade: ")

function podeVotar(idade){

return idade >= 16
}
if(podeVotar(idade))
    console.log("pode votar")
else{
    console.log("nao pode votar")

}