function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txano')
    var res = document.querySelector('div#res')

    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - fano.value
        var genero = ''

        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade <= 10) {
                //Criança
                img.setAttribute('src', 'BebeM.png')
            } else if (idade <= 21) {
                // Jovem
                img.setAttribute('src', 'JHomem.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'HAdulto.png')
            } else {
                //Idoso
                img.setAttribute('src', 'idosoHomem.png')
            }

        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'BebeF.png')
            } else if (idade <= 21) {
                // Jovem
                img.setAttribute('src', 'JMulher.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'MAdulta.png')
            } else {
                //Idoso
                img.setAttribute('src', 'IdosaMulher.png')
            }

        }
        res.style.textAlign = 'center' //Centraliza pelo Java Script
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}