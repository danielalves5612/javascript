//ex001

/*function maior(numero1, numero2){
    if(numero1 > numero2){
        console.log(`O número ${numero1} é maior que o número ${numero2}`)
    }else{
        console.log(`O número ${numero2} é maior que o número ${numero1}`)
    }
}           
maior(5000, 5)*/

// Refatorando a função acima utilizando arrow function

const max2 = (x, y) => x > y ? x : y;
console.log(max2(5000, 5))



