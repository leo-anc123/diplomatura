//Haciendo uso de bucles recorrer un array de 5 numeros y determinar cual es mayor

const arrayNum = [2, 23, 10, 8, 6]
let mayor = 0

for (let i = 0; i < arrayNum.length; i++) {
    if (arrayNum[i] > mayor){
     mayor = arrayNum[i]
    }
}

console.log(mayor);