// Crea un ejercicio que dada una distancia determine el medio de transporte apropiado de acuerdo a las siguientes reglas
/* 0 a 1000 = pie
   1000 a 10000 = bicicleta
   10000 a 30000 = colectivo
   30000 a 100000 metros = auto
   +100000 = avión

*/


const distancia = parseInt(prompt('ingrese distancia a recorrer'))


if (Number.isNaN(distancia)) {
    console.log("Ingrese un numero valido")
} else if (distancia >= 0 && distancia <= 1000 ) {
 document.write('El trasporte adecuado es a pie')
} else if (distancia > 1000 && distancia <= 10000 ) {
 document.write('El trasporte adecuado es a bicicleta')
} else if (distancia > 10000 && distancia <= 30000){
    document.write('El transporte adecuado es colectivo')
} else if (distancia > 30000 && distancia <= 100000) {
    document.write('El transporte adecuado es auto')
} else  {
    document.write('El transporte adecuado es avion')
}
