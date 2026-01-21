const nome = document.getElementById('nome')
const sobrenome = document.getElementById('sobrenome')
let peso = document.getElementById('peso')
let altura = document.getElementById('altura')
let res = document.getElementById('res')

nome = nome.value
sobrenome = sobrenome.value
peso = Number(peso.value)
altura = Number(altura.value)
res.innerHTML = `${nome} ${sobrenome} ${peso} ${altura}`
