/*  FORMA DOIS
const titulo = document.querySelector('#titulo')
const data = new Date()
const opcoes = {
    dateStyle: 'full', // --> FORMA DOIS
    timeStyle: 'short'
}

titulo.innerHTML = data.toLocaleString('pt-BR', opcoes)

*/

/* FORMA UM
function getdiaDaSemana(hoje){
    let diaDaSemanaTexto
    switch(hoje){
        case 0:
            diaDaSemanaTexto = 'Domingo'
            return diaDaSemanaTexto
        case 1: 
            diaDaSemanaTexto = 'Segunda-Feira'
            return diaDaSemanaTexto
        case 2: 
            diaDaSemanaTexto = 'Terça-Feira'
            return diaDaSemanaTexto
        case 3: 
            diaDaSemanaTexto = 'Quarta-Feira'
            return diaDaSemanaTexto
        case 4: 
            diaDaSemanaTexto = 'Quinta-Feira'
            return diaDaSemanaTexto
        case 5: 
            diaDaSemanaTexto = 'Sexta-Feira'
            return diaDaSemanaTexto
        case 6: 
            diaDaSemanaTexto = 'Sábado'
            return diaDaSemanaTexto
        default: 
            return 'Dia da semana inválido'
    }
}

function getmesDoAno(mesAno){      
    let nomeMesAno
    switch(mesAno){
        case 0:
            nomeMesAno = 'Janeiro'
            return nomeMesAno
        case 1:
            nomeMesAno = 'Fevereiro'
            return nomeMesAno
        case 2:
            nomeMesAno = 'Março'
            return nomeMesAno
        case 3:
            nomeMesAno = 'Abril'
            return nomeMesAno
        case 4:
            nomeMesAno = 'Maio'
            return nomeMesAno
        case 5:
            nomeMesAno = 'Junho'
            return nomeMesAno
        case 6:
            nomeMesAno = 'Julho'
            return nomeMesAno
        case 7:
            nomeMesAno = 'Agosto'
            return nomeMesAno
        case 8:
            nomeMesAno = 'Setembro'
            return nomeMesAno
        case 9:
            nomeMesAno = 'Outubro'
            return nomeMesAno
        case 10:
            nomeMesAno = 'Novembro'
            return nomeMesAno
        case 11:
            nomeMesAno = 'Dezembro'
            return nomeMesAno
        default:
            return 'Mês inválido'
    }
}

function zeroAEsquerda (num){
    return num >= 10 ? num : `0${num}`
}

const data = new Date()
const hoje = data.getDay()
const diaNum = data.getDate()
const mesAno = data.getMonth()
const ano = data.getFullYear()
const hora = data.getHours()
const min = data.getMinutes()
const eximesDoAno = getmesDoAno(mesAno)
const exiDiaDaSemana = getdiaDaSemana(hoje)
titulo.innerHTML = `${exiDiaDaSemana}, ${diaNum} de ${eximesDoAno} de ${ano} <br> ${zeroAEsquerda(hora)}:${zeroAEsquerda(min)}`
*/
