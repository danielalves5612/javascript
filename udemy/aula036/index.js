// for in faz a leitura dos índices ou chaves de um objeto

const pessoa = {
    nome: 'Daniel',
    sobrenome: 'Alves',
    idade: 21
}

for(let chave in pessoa){
    console.log(chave, pessoa[chave])
}

/*
for (let i in frutas){
    console.log(frutas[i])
}
*/
/*
const frutas = ['Pêra', 'Maça', 'Uva']
for (let i = 0; i < frutas.length; i++){
    console.log(frutas[i])
}
*/