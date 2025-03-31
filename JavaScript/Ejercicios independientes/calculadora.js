const prompt = require("prompt-sync")();

function calcular(numero1, numero2, operacion) {
    let resultado;

    switch (operacion) {
        case "+":
            resultado = numero1 + numero2;
            break;
        case "-":
            resultado = numero1 - numero2;
            break;
        case "*":
            resultado = numero1 * numero2;
            break;
        case "/":
            if (numero2 === 0) {
                alert("No se puede dividir por cero.");
                return;
            }
            resultado = numero1 / numero2;
            break;
        default:
            alert("Operación no válida");
            return;
    }

    console.log(`El resultado de ${numero1} ${operacion} ${numero2} es: ${resultado}`);
}

function main(){
    console.log("HOLAAAAAAAAAAAAAAAAAAAAAAA")

    let numero1 = parseFloat(prompt("Ingrese el primer número:"));
    let numero2 = parseFloat(prompt("Ingrese el segundo número:"));
    let operacion = prompt("Ingrese la operación (+, -, *, /):")

    calcular(numero1, numero2, operacion)
}

main();

