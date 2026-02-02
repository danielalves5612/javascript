const pessoa = {
    nome: 'Daniel',
    sobrenome: 'Alves',
    idade: 21,
    endereco: {
        rua: 'José Moreira',
        numero: 197
    }
}
//Atribuição via desestruturação
const {nome, sobrenome, ...resto} = pessoa
console.log(nome, sobrenome, resto)