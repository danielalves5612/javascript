function somar(x, y){
    if( typeof x !== 'number' || typeof y !== 'number'){
        throw new ReferenceError('x e y precisam ser números')
    }
    return x + y
}
try{
    console.log(somar(10, 65))
    console.log(somar('10', 65))
}catch(error){
    //console.log(error)
    console.log('Por favor, digite um número válido')
}