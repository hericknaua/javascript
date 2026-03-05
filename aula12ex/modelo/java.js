
function carregar() {
    var atual = new Date()
    var data = atual.getHours()
    var msg = document.getElementById("p")
    var img = document.getElementById("img")
    var para = document.getElementById("dia")

    msg.innerHTML = `Agora são ${data} horas.`
    if (data < 12) {
        document.body.style.background = "antiquewhite"
        img.src = "imagens/img-manha.jpg"
        para.innerHTML = "<strong>Bom dia!</strong>"
        para.style.color = "green"
    } else if (data <= 18) {
        document.body.style.background = "burlywood"
        img.src = "imagens/img-tarde.jpg"
        para.innerHTML = "<strong>Boa tarde!</strong>"
        para.style.color = "orange"
    }
    else {
        document.body.style.background = "darkslategrey"
        img.src = "imagens/img-noite.jpg"
        para.innerHTML = `<strong>Boa noite!</strong>`
        para.style.color = "red"
    }
}