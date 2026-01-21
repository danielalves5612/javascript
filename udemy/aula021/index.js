/*
Operadores de comparação:
> maior que
>= maior que ou igual a
< menor que
<= menor que ou igual a
== igualdade (valor)
=== igualdade estrita (valor e tipo)
!= diferente (valor)
!== diferente estrito (valor e tipo)
*/ 
const num1 = 10
const num2 = '10'
const comp = num1 === num2 // Não use apenas ==, porque ele vai fazer a mudança de tipo
console.log(comp)

const num3 = 10
const num4 = '10'
const compa = num3 !== num4 // Mesma coisa, não use !=, troque por !==
console.log(compa)