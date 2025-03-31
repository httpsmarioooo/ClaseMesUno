import validator from 'validator';
import promptSync from 'prompt-sync';

const prompt = promptSync();

let inputEmail = "";
while (!validator.isEmail(inputEmail)) {
    inputEmail = prompt("¿Cuál es tu dirección de correo electrónico? ");
}
console.log("Gracias su corre fue: " +inputEmail)