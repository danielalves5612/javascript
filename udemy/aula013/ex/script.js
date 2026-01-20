const nome = prompt('Digite o seu nome completo: ')

document.body.innerHTML = `Seu nome é: <strong>${nome}</strong> <br>` 
document.body.innerHTML += `Seu nome têm ${nome.length} letras <br>`
document.body.innerHTML += `A segunda letra do seu nome é: <strong>${nome.charAt(1)}</strong> <br>` 
document.body.innerHTML += `Qual o primeiro índice da letra <strong>${nome.charAt(1)}</strong> no seu nome? ${nome.indexOf('a')} <br>` 
document.body.innerHTML += `Qual o último índice da letra <strong>${nome.charAt(1)}</strong> no seu nome? <strong>${nome.lastIndexOf('a')}</strong> <br>` 
document.body.innerHTML += `As últimas 3 letras do seu nome são: ${nome.slice(-3)} <br>` 
document.body.innerHTML += `As palavras do seu nome são: ${nome.split()}<br>`
document.body.innerHTML += `Seu nome com letras maiúsculas: <strong>${nome.toUpperCase()}</strong> <br>`
document.body.innerHTML += `Seu nome com letras minúsculas: <strong>${nome.toLowerCase()}</strong>`

