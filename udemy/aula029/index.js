// Switch/Case
function getDiaSemana (hoje){
    let diaDaSemana

    switch (hoje){
    case 0:
        diaDaSemana = 'Domingo'
        return diaDaSemana
    case 1:
        diaDaSemana = 'Segunda'
        return diaDaSemana
    case 2:
        diaDaSemana = 'Terça'
        return diaDaSemana
    case 3:
        diaDaSemana = 'Quarta'
        return diaDaSemana
    case 4:
        diaDaSemana = 'Quinta'
        return diaDaSemana
    case 5:
        diaDaSemana = 'Sexta'
        return diaDaSemana
    case 6:
        diaDaSemana = 'Sábado'
        return diaDaSemana
    default:
        diaDaSemana = 'Dia da semana inválido'
    }
}

const data = new Date()
let hoje = data.getDay()
const diaDaSemana = getDiaSemana(hoje)
console.log(diaDaSemana, hoje)