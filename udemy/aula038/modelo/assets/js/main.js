const paragrafos = document.querySelector('.paragrafos')
const p = paragrafos.querySelectorAll('p')
const estilosBody = getComputedStyle(document.body) //pega todos os estilos computados do body
const backgroundColorBody = estilosBody.backgroundColor //pega a cor de fundo do body

for(let pb of p){ 
    pb.style.backgroundColor = backgroundColorBody
    pb.style.color = 'white'
    pb.style.borderRadius = '10px'
    pb.style.padding = '10px'
}
