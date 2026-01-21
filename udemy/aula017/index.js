const raiz = function (n){
    return n ** 0.5
}

console.log(raiz(9))


/*
function soma (num1 = 1, num2 = 2){
    const resultado = num1 + num2
    console.log('Olá, Mundo') 
    return resultado
}
*/

// const resultado = soma()
// console.log(resultado)

// console.log(soma(10, 10))
// console.log(soma(5, 5))
// console.log(soma(15, 15))

/*
function saudacao(nome){                                    
    return `Bom dia ${nome}`
}

const variavel = saudacao('Daniel')
console.log(variavel)
*/

/* 

1 -> Sempre que fizer uma função, você deve chamar ela do lado de fora, pode informar parametros dentro das parenteses e colocar os valores na chamada (fora da função)
2 -> Caso você não informe oque a função deve retornar e guarde o valor dela em uma variável, ela apenas vai informar undefined, para que ela retorne algo, dentro do bloco da função, precisa ter um return com algum tipo de valor.
3 -> Você não pode exibir resultado ou pegalos de fora da função, porém exemplo, uma variável com o valor 1 dentro da função, se você pedir para exibir com o console.log, nada vai aparecer, porque você não recebe esse resultado
4 -> Nada que for colocado dentro da função, depois do return, será exibido
5 -> Você pode definir um valor padrão no parâmetro, assim, caso não passe nenhum valor na chamada da função, os valores do parametro serão utilizados
6 -> Você pode guardar o valor de uma função, dentro de uma variável

*/ 