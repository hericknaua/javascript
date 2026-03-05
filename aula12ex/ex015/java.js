
function verificador() {
    var anonas = document.getElementById("iano").value
    var anosnas2 = Number(anonas)
    var anoatual = new Date()
    var atual = anoatual.getFullYear()
    var msg = document.getElementById("msg")
    var img = document.getElementById("img")
    var anoesco = atual - anosnas2
    var sex = document.getElementsByName("caixa")

    if (anonas.length == 0 || anosnas2 > atual) {
        msg.innerHTML = `Sinto muito, o ano escolhido é inválido!`
        msg.style.color = "red"
        img.style.display = "none"
        
    }
    else if (anosnas2 < 1926) {
        msg.innerHTML = `Este ano não esta em nosso alcance de verificação de idade!`
        msg.style.color = "red"
        img.style.display = "none"

    }
    else if (sex[0].checked && anoesco <=13){
        msg.innerHTML = `Detectamos um <strong>criança</strong> com ${anoesco} anos.`
        msg.style.color = "black"
        img.src = "imagens/bebe-m.png"
        img.style.display = "block"
    }else if (sex[1].checked && anoesco <=13) {
        msg.innerHTML = `Detectamos uma <strong>criança</strong> com ${anoesco} anos.`
        msg.style.color = "black"
        img.src = "imagens/bebe-f.png"
        img.style.display = "block"
    }else if (sex[0].checked && anoesco <= 26) {
        msg.innerHTML = `Detectamos um <strong>jovem</strong> com ${anoesco} anos.`
        msg.style.color = "black"
        img.src = "imagens/jovem-m.png"
        img.style.display = "block"
    }else if (sex[1].checked && anoesco <= 26) {
        msg.innerHTML = `Detectamos uma <strong>jovem</strong> com ${anoesco} anos.`
        msg.style.color = "black"
        img.src = "imagens/jovem-f.png"
        img.style.display = "block"
    }else if (sex[0].checked && anoesco <=50) {
        msg.innerHTML = `Detectamos um <strong>adulto</strong> com ${anoesco} anos.`
        msg.style.color = "black"
        img.src = "imagens/adulto-m.png"
        img.style.display = "block"
    }else if (sex[1].checked && anoesco <=50) {
        msg.innerHTML = `Detectamos uma <strong>adulta</strong> com ${anoesco} anos.`
        msg.style.color = "black"
        img.src = "imagens/adulto-f.png"
        img.style.display = "block"
    }else if (sex[0].checked && anoesco <=100) {
        msg.innerHTML = `Detectamos um <strong>idoso</strong> com ${anoesco} anos.`
        msg.style.color = "black"
        img.src = "imagens/idoso-m.png"
        img.style.display = "block"
    }else if (sex[1].checked && anoesco <=100) {
        msg.innerHTML = `Detectamos uma <strong>idosa</strong> com ${anoesco} anos.`
        msg.style.color = "black"
        img.src = "imagens/idoso-f.png"
        img.style.display = "block"
    }
}