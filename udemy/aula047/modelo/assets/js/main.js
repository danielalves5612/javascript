function criaHoraDosSegundos(segundos){
    const data = new Date(segundos * 1000)
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'GMT'
    })
}

const relogio = document.querySelector('div#relogio')
const iniciar = document.querySelector('button#iniciar')
const pausar = document.querySelector('button#pausar')
const zerar = document.querySelector('button#zerar')
let segundos = 0
let timer

function iniciaRelogio(){
    timer = setInterval(function (){
        segundos++
        relogio.innerHTML = criaHoraDosSegundos(segundos)
    }, 1000)
}

iniciar.addEventListener('click', function(evento){
    clearInterval(timer)
    iniciaRelogio()
});

pausar.addEventListener('click', function(evento){
    clearInterval(timer)
});

zerar.addEventListener('click', function(evento){
    clearInterval(timer)
    segundos = 0
    relogio.innerHTML = '00:00:00'
});