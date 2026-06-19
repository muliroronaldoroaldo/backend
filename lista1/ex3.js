const input = require ("readline-sync")
let num = Number(input.question("diga o numero e veja se é par ou impar "))
if(num %2===0){
   console.log("o numero é par")
}
else{
    console.log("o numero é impar")
}