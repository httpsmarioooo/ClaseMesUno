// 🏋️‍♂️ Ejercicio 1: Suma de Elementos
// Crea una función que reciba un array de números y retorne la suma de todos los elementos.

// function sumarElementos(numeros) {
//     let suma = 0;
//     for (let i = 0; i < numeros.length; i++){
//         suma += numeros[i];
//     }

//     return suma

// }

// console.log(sumarElementos([1, 2, 3, 4]));



let numeros = [1,2,3,4,5];
let suma = 0;

for (let i=0; i < numeros.length; i++){
    suma += numeros[i];
}

console.log(suma);
