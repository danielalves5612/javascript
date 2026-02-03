/*function ePaisagem(largura, altura){
    if(largura > altura){
        return true
    }else{
        return false
    }
}
console.log(ePaisagem(1000, 1080))*/

// refatorando a função acima utilizando arrow function

const epaisagem = (largura, altura) => largura > altura
console.log(epaisagem(1920, 1080))