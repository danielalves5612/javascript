const inputTarefa = document.querySelector('.input-tarefa')
const btnTarefa = document.querySelector('.btn-tarefa')
const tarefas = document.querySelector('.tarefas')

function criaLi(){
    const li = document.createElement('li')
    return li
}

btnTarefa.addEventListener('click', function(){
    criarTarefa()
})

inputTarefa.addEventListener('keypress', function(e){
   if(e.keyCode === 13){
    criarTarefa()
   }
})

function criarTarefa(){
    const li = criaLi()
    if(!inputTarefa.value) return
    li.innerHTML = inputTarefa.value
    tarefas.appendChild(li)
    inputTarefa.value = ''
    inputTarefa.focus()
    criarBotaoApagar(li)
    selecionaTexto()
    
}

function criarBotaoApagar(li){
    const botaoApagar = document.createElement('button')
    li.appendChild(botaoApagar)
    botaoApagar.setAttribute('class', 'apagar')
    botaoApagar.setAttribute('title', 'Apagar texto')
    botaoApagar.innerHTML = 'Apagar'
}

document.addEventListener('click', function(e){
    const el = e.target
    if(el.classList.contains('apagar')){
        el.parentElement.remove()
    }
})

function selecionaTexto(){
    const pegali = document.querySelectorAll('li')
    const array = []
    for(let tarefas of pegali){
        let texto = tarefas.innerText
        texto = texto.replace('Apagar', ' ').trim()
        array.push(texto)
    }
    const json = JSON.stringify(array)
    localStorage.setItem('tarefas', json)
    carregarTarefas(array)
}

function carregarTarefas(){
    let guardaValor = localStorage.getItem('tarefas')
    if(guardaValor){
        guardaValor = JSON.parse(guardaValor)
        for(valor of guardaValor){
            const li = criaLi()
            li.innerHTML = valor
            tarefas.appendChild(li)
            criarBotaoApagar(li)
        }
    }
}


