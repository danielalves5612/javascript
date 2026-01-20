//               0       1        2 -> Arrays possuem indice, igual a strings, porém cada elemento possuem um valor
const alunos = ['Luiz', 'Maria', 'João']

alunos[alunos.length] = 'Luiza' 
alunos[alunos.length] = 'Fábio'
alunos[alunos.length] = 'Luana'
console.log(alunos)

// console.log(alunos.length) -> Você pode verificar o tamanho do array 
// alunos[0] = 'Eduardo' -> Caso você queira mudar algum elemento, basta selecionar o indice e informar o novo valor
// alunos[3] = 'Luiza' -> Caso queira adicionar um elemento e saiba o final dele, basta informar o número final e valor
// console.log(alunos) -> mostra todos os alunos
// console.log(alunos[0]) -> Mostra apenas o Luiz
// console.log(alunos[2]) -> Mostra apenas o João