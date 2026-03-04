var atual = new Date()
var hora = atual.getHours()
console.log(`A hora atual é ${hora}:00`)
if (hora < 12) {
    console.log(`Já que a hora atual é ${hora}:00 você ganha um "Bom dia!"`)
} else {
    if(hora <= 18) {
        console.log(`Já que a hora atual é ${hora}:00 você ganha um "Boa Tarde!"`)
    }else {
        console.log(`Já que a hora atual é ${hora}:00 você ganha um "Boa noite!"`)
    }
}
