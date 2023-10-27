const empleados = [
    { nombre: "flavia", 
      trabajo: 'desarrollador' },
    { nombre: "Sol", 
      trabajo: 'desarrollador' },
    { nombre: "Luis", 
      trabajo: 'maestro' },
    { nombre: "Catalina", 
      trabajo: 'abogada' },
    { nombre: "Lucas", 
      trabajo: 'desarrollador' },
]

//con metodo array que solo muestre los desarrolladores.
//const devs = empleados.filter(empleado => empleado.trabajo === 'desarrollador')


/*
const devs = empleados.filter(function empleado(e){
  return e.trabajo === 'desarrollador';
})
console.log(devs);
*/

const devs = empleados.filter(e => e.trabajo == 'desarrollador');
console.log(devs);
//diferente a desarrolladores
const devs2 = empleados.filter(e => e.trabajo != 'desarrollador');
console.log(devs2);
const devs3 = empleados.sort('');
console.log(devs3);