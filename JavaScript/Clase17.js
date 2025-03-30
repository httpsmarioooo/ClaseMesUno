class carro{
    constructor (marca, modelo, cilindraje){
        this.marca = marca
        this.raza = modelo
        this.cilindraje = cilindraje
    }

    encender(){
        console.log("Brummmmm")
    }

    acelerar(){
        console.log("Estoy apagado")
    }

    frenar(){
        console.log("Frenando")
    }
}

const carro1 = new carro ("Mazda","2010","1000")
const carro2 = new carro ("Mazda","2010","1000")
const carro3 = new carro ("Mazda","2010","1000")

console.log(carro1)
carro1.encender();