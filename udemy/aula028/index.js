// Objeto date
//const tresHoras = 60 * 60 * 3 * 1000
//const umDia = 60 * 60 * 24 * 1000
//const data = new Date(0 + tresHoras + umDia) // 01/01/1970 Timestamp unix ou época unix
//const data = new Date(2005, 0, 28) // a, m, d, h, M, s, ms
/*const data = new Date(1769610816882) // Data em formato de string
console.log('Dia', data.getDate())
console.log('Mês', data.getMonth())
console.log('Ano', data.getFullYear())
console.log('Hora', data.getHours())
console.log('Minuto', data.getMinutes())
console.log('Segundo', data.getSeconds())
console.log('Milésimo de Segundo', data.getMilliseconds())
console.log('Dia da semana', data.getDay()) // 0 - Domingo, 6 - Sábado
*/
//console.log(Date.now())

function zeroAEsquerda (num){
    return num >= 10 ? num : `0${num}`
}

function formataData(data){
    const dia = zeroAEsquerda(data.getDate())
    const mes = zeroAEsquerda(data.getMonth() + 1)
    const ano = zeroAEsquerda(data.getFullYear())
    const hora = zeroAEsquerda(data.getHours())
    const minutos = zeroAEsquerda(data.getMinutes())
    const segundos = zeroAEsquerda(data.getSeconds())
    const milesimosDeSegundos = data.getMilliseconds()

    return `${dia}/${mes}/${ano} ${hora}:${minutos}:${segundos}:${milesimosDeSegundos}`
}

const data = new Date()
const dataBrasil = formataData(data)
console.log(dataBrasil)