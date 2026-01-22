function tabelaImc (){
    const form = document.querySelector('#form')
    const resultado = document.querySelector('#resultado')

  function calcularPeso(evento){
    evento.preventDefault()
    let peso = document.querySelector('#peso')
    let altura = document.querySelector('#altura')
    peso = Number(peso.value)
    altura = Number(altura.value)
    let imc = peso / (altura * altura)

      if (peso == 0 || altura == 0){
        alert('Por favor, digite uma altura ou peso')
    }
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
  form.addEventListener('submit', calcularPeso)
}
tabelaImc()