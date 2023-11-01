// Ejercicio 1 

const conductor = 'Leandro';
const edad = prompt('Ingresa su edad');
let edadIngresada = parseInt(edad)


if (edad > 18) {
    console.log(`${conductor} es mayor de edad, puede conducir`);
} else {
    console.log(`${conductor} no puede conducir `);
}

// solucion
/*
const edad = parseInt(prompt('ingrese su edad', ''))
if (Number.isNaN(edad)) {
    document.write('usted tiene permitido conducir')
} else {
    document.write('usted no tiene permitido conducir')
}
*/