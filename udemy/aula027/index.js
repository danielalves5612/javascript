// Operadores ternários -> (condição) ? (valor para verdadeiro) : (valor para falso)

const pontuacaoUsuario = 999
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário Vip' : 'Usuário normal'

const corUsuario = null
const corPadrao = corUsuario || 'Petro'
console.log(nivelUsuario, corPadrao)


//if(pontuacaoUsuario >= 1000){
//    console.log('Usuário VIP')
//}else{
//    console.log('Usuário normal')
//}