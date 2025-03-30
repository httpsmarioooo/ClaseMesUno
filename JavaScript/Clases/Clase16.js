


//! FUNCIONES 
function persona (nombre, apellido, email){
    this.nombre = nombre;
    this.apellido = nombre;
    this.email = nombre;
    this.nombreCompleto = function(){
        return this.nombre + " " + this. apellido;
    };
}

let persona1 = new persona ("Carlos", "Torres", "lalalal@gmail.com")
let persona2 = new persona ("Mario", "Perez", "lalalal@gmail.com")
let persona3 = new persona ("Daniela", "Torres", "lalalal@gmail.com")

console.log(persona1.nombreCompleto());
console.log(persona2.nombreCompleto());
console.log(persona3.nombreCompleto());