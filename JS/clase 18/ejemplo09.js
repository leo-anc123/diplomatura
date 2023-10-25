
const alumnos = [
    { nombre: "Juan",
      edad: 6
},
    { nombre: "Pablo",
      edad: 3
},
    { nombre: "Catalina",
      edad: 9
},
    { nombre: "Lucas",
      edad: 4
},
    { nombre: "Sol",
      edad: 8
}
]

//quiero saber que alumnos tienen una edad >= 4

// const mayoresDeEdad = alumnos.filter(alumno => alumno.edad >= 4)

const mayoresDeEdad = alumnos.filter(function (alumno){ return alumno.edad>=4 })
console.log(mayoresDeEdad);
//imprimir en pantalla en una "p"o "li" (bucle)
for (let i=0;i<mayoresDeEdad.length;i++){
  document.write(`<li>niño: ${mayoresDeEdad[i].nombre}, cuya edad es ${mayoresDeEdad[i].edad} </li> `)
  }

