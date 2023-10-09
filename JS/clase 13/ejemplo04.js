const num1 = parseInt(prompt('ingrese un numero', '')) //10
const num2 = parseInt(prompt('ingrese un numero', '')) //12
const num3 = parseInt(prompt('ingrese un numero', '')) //14

if(num1 > num2 && num1 > num3) {
    console.log(`el mayor es el ${num1}`)
}
else if(num2 > num3){
    console.log (`el mayor es el ${num2}`)
}
else{
    console.log (`el mayor es el ${num3}`)
}