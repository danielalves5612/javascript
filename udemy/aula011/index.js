/*
window.alert('Olá, tudo bem?') // Exibe uma mensagem de alerta para o usuário
window.confirm('Está gostando de programar?') // Exibe uma mensagem de confirmação, o valor que volta é boolean.
window.prompt('Qual a sua idade?') // Exibe uma caixa de texto, que o usuário pode digitar string ou number.
*/

// Você pode utilizar variáveis para guardar os valores do prompt e confirm, assim pode fazer laços de repetição com base nisso

let num1 = window.prompt('Digite um número: ')
let num2 = window.prompt('Digite outro número: ')
num1 = Number(num1)
num2 = Number(num2)
window.alert(`O primeiro número digitado é ${num1} e o segundo número digitado é ${num2}, a soma dos dois é ${num1 + num2}`)