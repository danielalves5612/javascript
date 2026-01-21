/*
Primitivos (imutáveis) -> String, number, boolean, undefined, null (bigint, symbol) -> valor

Referência (mutável) -> array, object, function
*/ 

const a = {
    nome: 'Daniel',
    sobrenome: 'Alves'
}
const b = {...a}
a.nome = 'Isabel'
console.log(b) // -> Colocando {...a} você copia o valor de a, caso mude o valor de a posteriormente, o de b continua o mesmo
console.log(a)

/*const nome = 'Daniel'
nome[0] = 'L' -> Dado imutável, não podemos trocar o valor do indíce
console.log(nome[0])
*/

/*
let a = [1, 2, 3]
let b = a
console.log(a, b)

a.push(4)
console.log(a) -> Basicamente o valor de b está sendo referênciado na memória no mesmo lugar que o valor de a

b.pop()
console.log(a, b)
*/