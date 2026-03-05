function contando() {
    var para = document.getElementById("contagem")
    var inicio = document.getElementById("iinicio")
    var fim = document.getElementById("ifim")
    var passo = document.getElementById("ipasso")

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        para.innerHTML = "Impossível contar!"
        window.alert("[ERROR] faltam dados!")
    } else {
        para.innerHTML = `Contando:<br>`
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        var c = i
        if (p <= 0 ) {
            window.alert("Passo inválido! Considerando PASSO 1")
            p = 1
        }
        if (i < f) {
            while (c <= f) {
                para.innerHTML += `${c} \u{1F449}`
                c += p
            }
        }else {
            for (c; c >=f; c -= p)
            para.innerHTML += `${c} \u{1F449}`
        }

        para.innerHTML += ` \u{1F3C1}`
    }
}