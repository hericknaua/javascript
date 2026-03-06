let amigo = {nome: "Herick", sexo: "Masculino", idade: "18", peso: 66.4,
    engordar(p=0) {
        console.log("Thaís Carla")
        this.peso += p
}
}
amigo.engordar(3)
console.log(`${amigo.nome} pesa ${amigo.peso}kg`)