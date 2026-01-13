function verificar(){
    var data = new Date ()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano){
        window.alert('[ERROR] Verifique os dados digitados!')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement ('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            var gênero = 'Homem'
            if (idade >= 0 && idade <= 10){
                //Criança
                img.setAttribute('src', 'homem-criança.jpg')
            }else if (idade <= 21){
                //Jovem
                img.setAttribute('src', 'homem-jovem.jpg')
            }else if (idade <= 50){
                //Adulto
                img.setAttribute('src', 'homem-adulto.jpg')
            }else {
                //Idoso
                img.setAttribute('src', 'homem-idoso.jpg')
            }
        }else if (fsex[1].checked){
            var gênero = 'Mulher'
            if (idade >= 0 && idade <= 10){
                //Criança
                img.setAttribute('src', 'mulher-criança.jpg')
            }else if (idade <= 21){
                //Jovem
                img.setAttribute('src', 'mulher-jovem.jpg')
            }else if (idade <= 50){
                //Adulto
                img.setAttribute('src', 'mulher-adulta.jpg')
            }else {
                //Idoso
                img.setAttribute('src', 'mulher-idosa.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Verificamos ${gênero} com ${idade} anos`
        res.appendChild(img)
    }
}