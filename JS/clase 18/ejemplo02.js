//filter()

const numeros = [1,2,3,4,5,6,7,8,9,10];
//filtro para imprimir solo los numeros pares
const numerosPares = numeros.filter(num => num % 2 === 0);
console.log(numerosPares)