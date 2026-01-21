//               0       1        2 -> Arrays possuem indice, igual a strings, porém cada elemento possuem um valor
let alunos = ['Luiz', 'Maria', 'João']
alunos = 123

// console.log(typeof alunos) -> Você verifica que alunos é um objeto
// console.log(alunos instanceof Array) -> Você verifica se uma variável é realmente um array

// alunos.push('Luiza')
//alunos.push('Eduardo')
// console.log(alunos.slice(0, -2)) -> Você pode fatiar um array. + -> de trás para frente - -> de frente para trás

// console.log(alunos[50]) -> Quando você tenta ver um valor que o array não possui, ele retorna undefined

// delete alunos[1] -> Deleta o indice e o elemento, será tratado como não definido
// console.log(alunos[1])

// const removido = alunos.shift() -> remove elementos no começo do array
// console.log(removido)
// console.log(alunos)

// const removido = alunos.pop() -> remove elementos no final do array

// alunos.unshift('Luiza') -> Adiciona no começo
// alunos.unshift('Fábio')

// alunos.push('Luiza') -> O push é usado para adicionar dados no array, bem mais prático que o length da maneira abaixo
// alunos.push('Fábio') -> Adiciona no final do array

// alunos[alunos.length] = 'Luiza' 
// alunos[alunos.length] = 'Fábio' -> Adiciona alunos dentro do array, apenas informando o tamanho dele.
// alunos[alunos.length] = 'Luana'

// console.log(alunos.length) -> Você pode verificar o tamanho do array 
// alunos[0] = 'Eduardo' -> Caso você queira mudar algum elemento, basta selecionar o indice e informar o novo valor
// alunos[3] = 'Luiza' -> Caso queira adicionar um elemento e saiba o final dele, basta informar o número final e valor
// console.log(alunos) -> mostra todos os alunos
// console.log(alunos[0]) -> Mostra apenas o Luiz
// console.log(alunos[2]) -> Mostra apenas o João