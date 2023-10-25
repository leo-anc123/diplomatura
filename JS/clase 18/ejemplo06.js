
const nombre = 'flavia';
const edad = 42;

console.log(`Hola ${nombre} vos tenes ${edad}`);

//interpolacion de strings
const edad1 = 18
const edad2 = 32

const mensaje1 = `la cuota para personas de ${edad1} es de ${edad1 >=21 ? 5000 : 3500}`
//operador ternario --> Version simplificada del if
console.log(mensaje1);

const mensaje2 = `la cuota para personas de ${edad2} es de ${edad2 >=21 ? 5000 : 3500}`
console.log(mensaje2);