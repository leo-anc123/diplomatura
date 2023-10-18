let x = 1;
const cuantos = 5;
let suma = 0;

while (x <= cuantos) {
    const valor = parseInt(prompt(`ingrese el valor ${x} de ${cuantos}`, ''))
    suma +=valor; //1+valor que completa el ususario = se guarda en la variable suma
    x++
}

console.log(`la suma de los valores es ${suma}`)