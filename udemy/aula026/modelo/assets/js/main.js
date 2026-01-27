function tabelaImc (){
    const form = document.querySelector('#form')
    const resultado = document.querySelector('#resultado')

  function calcularPeso(evento){
    evento.preventDefault()
    let peso = document.querySelector('#peso')
    let altura = document.querySelector('#altura')
    peso = Number(peso.value)
    altura = Number(altura.value)
    if (peso == 0){
      resultado.innerHTML = '<p>Por favor, digite um peso válido</p>'
      resultado.style.backgroundColor = 'red'
    }else if(altura == 0){
        resultado.innerHTML = '<p>Por favor, digite uma altura válida</p>'
        resultado.style.backgroundColor = 'red'
    }else{
    let imc = peso / (altura * altura)
    resultado.innerHTML = ''
    if(imc >= 0 && imc <= 18.5){
        resultado.innerHTML = `<p>Seu IMC é ${imc.toFixed(2)} (Abaixo do peso)</p>`
    }else if(imc >= 18.5 && imc <= 24.9){
        resultado.innerHTML = `<p>Seu IMC é ${imc.toFixed(2)} (Peso normal)</p>`
    }else if(imc >= 25.0 && imc <= 29.9){
        resultado.innerHTML = `<p>Seu IMC é ${imc.toFixed(2)}, (Sobrepeso)</p>`
    }else if(imc >= 30.0 && imc <= 34.9){
        resultado.innerHTML = `<p>Seu IMC é ${imc.toFixed(2)}, (Obesidade grau 1)</p>`
    }else if(imc >= 35.0 && imc <= 39.9){
        resultado.innerHTML = `<p>Seu IMC é ${imc.toFixed(2)}, (Obesidade grau 2)</p>`
    }else if (imc >= 40){
        resultado.innerHTML = `<p>Seu IMC é ${imc.toFixed(2)}, (Obesidade grau 3)</p>`
    }
    resultado.style.backgroundColor = 'cyan'
    }
  }
  form.addEventListener('submit', calcularPeso)
}
tabelaImc()

/*
const form = document.querySelector('#formulario')

    form.addEventListener('submit', function (e)){
        e.preventDefault()
        const inputPeso = e.target.querySelector('#peso')
        const inputAltura = e.target.querySelector('#altura')

        const peso = Number(inputPeso.value)
        const altura = Number(inputAltura.value)

        if (!peso){
        setResultado('Peso inválido', false)}
        return
        }

        if(!altura){
        setResultado('Altura inválida', false)
        return
        }

        const imc = getImc(peso, altura)
        const nivelImc = getNivelImc(imc)
        const msg = `Seu IMC é ${imc} (${getNivelImc})`
        setResultado(msg, true);
    }

    function getNivelImc (imc){
        const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3']

        if(imc >= 39.9) return nivel[5]
        if(imc >= 34.9) return nivel[4]
        if(imc >= 29.9) return nivel[3]
        if(imc >= 24.9) return nivel[2]
        if(imc >= 18.5) return nivel[1]
        if(imc < 18.5)  return nivel[0]
    }

    function getImc(peso, altura){
        const imc = peso / altura ** 2}
        return imc.toFixed(2)
    }

    function criaP(){
        const p = document.createElement('p')
        return p
    }

    function setResultado (msg, isValid){
        const resultado = document.querySelector('#resultado')
        resultado.innerHTML = ''
        const p = criaP()

        if (isValid) { 
            p.classList.add('paragrafo-resultado')
        }else{
            p.classList.add('bad')
        }

        p.innerHTML = msg
        resultado.appendChild(p)
    }

*/