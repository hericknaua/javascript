let msg = document.getElementById("msg")


let valores = []
function adicionar(){
    let num = document.getElementById("inum")
    let lista = document.getElementById("lista")
    let n1 = Number(num.value)
    let item = document.createElement("option")
    if (num.value.length == 0) {
        alert("Desculpe você não digitou nenhum número!")
        num.focus()
    }
    else if (n1 < 1 || n1 > 100) {
        alert("Desculpe, só adicionamos números de 1 a 100!")
        num.value = ""
        num.focus()
    }
    else if (valores.includes(n1)) {
        alert("Este valor já foi adicionado!")
        num.value = ""
        num.focus()
    }
    else if (n1 >= 1 && n1 <= 100) {
        valores.push(n1)
        item.innerHTML = `Valor ${n1} adicionado.`
        lista.appendChild(item)
        num.value = ""
        num.focus()
        msg.innerHTML = ``

    } 
}

function finalizar() {
    let maior = valores[0]
    let menor = valores[0]
    let soma = 0
    let lista = document.getElementById("lista")
    
    if (valores.length == 0) {
        alert("Adicione algum número para finalizar!")
    }
    for (var pos = 0; pos < valores.length; pos ++) {
        soma += valores[pos]
        
        
        if (valores[pos] > maior) {
            maior = valores[pos]
        }
        if (valores[pos] < menor) {
            menor = valores[pos]
        }
    }
    let media = soma / valores.length
    
    msg.innerHTML += `<p>Ao todo, temos ${valores.length} números cadastrado.</p>`
    msg.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
    msg.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
    msg.innerHTML += `<p>Somando todos os valores, temos ${soma}</p>`
    msg.innerHTML += `<p>A média dos valores digitados é ${media}</p>`

}