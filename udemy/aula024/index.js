/*
Entre 0 -11 - Bom dia
Entre 12 - 17 - Boa tarde
Entre 18 - 23 - Boa noite
*/

// If pode ser utilizado sozinho
// Sempre que utilizo a palavra else, preciso de um if antes
// Eu posso ter vários else ifs na checagem
// Só posso ter um else na checagem
// Podemos usar consições sem else if, utilizando apenas if e else

const hora = 50
if (hora >= 0 && hora <= 11){
    console.log(`Bom dia, são ${hora} da manhã`)
}else if (hora >= 12 && hora <= 17) {
    console.log(`Boa tarde, são ${hora} da tarde!`)
}else if(hora >= 18 && hora <= 23) {
    console.log(`Boa noite, são ${hora} da noite!`)
}else{
    console.log('Digite um valor válido (entre 0 e 23)')
}
