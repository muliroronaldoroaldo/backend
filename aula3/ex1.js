const input = require("readline-sync")

const eu = {
    nome: "Murilo Piola",
    idade: 16,
    cidade: "Cascavel",
    curso: "Desenvolvimento de Sistemas"
}
console.log(`meu nome é ${eu.nome}, tenho ${eu.idade} anos, moro em ${eu.cidade} e estudo ${eu.curso}.`)
eu.cidade = "Caxias do Sul"
console.log(`agora moro em ${eu.cidade}.`)