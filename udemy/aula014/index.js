// IEEE 754-2008
let num1 = 0.7
let num2 = 0.1

//num1 = ((num1 * 100) + (num2 * 100)) / 100
//num1 = ((num1 * 100) + (num2 * 100)) / 100 -> Também resolve o problema do 0.9
///num1 = ((num1 * 100) + (num2 * 100)) / 100

// num1 = Number(num1.toFixed(2)) -> resolve o problema de 0.9
console.log(num1)
console.log(Number.isInteger(num1))


// console.log(num1.toString() + num2) -> Faz com que apenas nessa linha, o número seja uma string
// num1 = num1.toString() -> Faz com que a variável num1, fique como string em todo o código, não ser que seja mudado novamente
// console.log(num1.toString(2)) -> Faz com que apareça os números binários, que representam o valor da var
// console.log(num1.toFixed(2)) -> Faz com que apareça apenas as casas decimais que você solicitar, pode arredondar números
// console.log(Number.isInteger(num1)) -> Verifica se o número é inteiro ou com ponto flutuante, devolve o valor em true/false
/*
let temp = num1 * '5' -> Caso a sua conta esteja retornando um NAN, ele informa um true e caso não esteja, um false.
console.log(Number.isNaN(temp))
*/


