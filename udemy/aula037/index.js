const pessoa = {
    nome: 'Daniel',
    sobrenome: 'Alves',
    idade: 21
}
for(let chave in pessoa){
    console.log(chave, pessoa[chave])
}


/*const nome = ['Daniel', 'Isabel', 'Magali', 'Anilton']

for (let i = 0; i < nome.length; i++){
    console.log(nome[i]) // for clássico
}

console.log('---------')

for(let i in nome){
    console.log(nome[i]) // for in - pega o índice ou chave do objeto
}

console.log('---------')

for (let valor of nome){ // for of - pega o valor em si
    console.log(valor)
}

console.log('---------')

nome.forEach(function(valor, indice, array){
    console.log(valor, indice, array)
})*/