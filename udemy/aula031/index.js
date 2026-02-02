const verdadeira = true
// let têm escopo de bloco {...bloco}
// Var só têm escopo de função

/*
let nome = 'Daniel'
var nome2 = 'Alves'
if (verdadeira) {
    let nome = 'Isabel'
    console.log(nome, nome2)

    if (verdadeira) {
        let nome = 'Maria'
        console.log(nome, nome2)
    }
}
*/

/*
function falaOi(){
    var sobrenome = 'Alves'
    if (verdadeira) {
        let nome = 'Daniel'
        //console.log(nome)
        console.log(sobrenome)
    }
}

falaOi()
*/

console.log(sobrenome)
var sobrenome = 'alves' // hoisting (elevação)  - eleva a declaração da variável para cima do código, mas não a inicialização