/*
&& -> false && true -> false "o valor mesmo"
|| -> false || true -> true "vai retornar o valor verdadeiro"

Falsy
false
0
'' "" ``
null / undefined
NaN
*/

function falaOi(){
    return 'Oi'
}

const vaiExecutar = 'false'
console.log(vaiExecutar && falaOi())