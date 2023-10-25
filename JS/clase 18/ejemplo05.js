//sort()

const frutas = ['palta', 'frutilla', 'banana', 'sandia', 'manzana']
console.log(frutas);
console.log(frutas.sort()); //que imprime esta variable?

const numeros = [10, 1, 4, 6];
//console.log(numeros.sort());
//console.log(numeros.sort().reverse())


// de menor a mayor
numeros.sort(function (a,b){return a-b});
//de mayor a menor
numeros.sort(function (a,b){ return b - a})

console.log(numeros)