
const datosUsuarios = [
    {
        nombre:'flavia',
        password: 'as1234' 
    },
    {
        nombre:'laura',
        password: 'sfe1234' 
    },
    {
        nombre:'sol',
        password: 'st1234' 
    },
    {
        nombre:'catalina',
        password: 'dio1234' 
    },
    {
        nombre:'victoria',
        password: 'etr1234' 
    },
]

const soloPass = datosUsuarios.map(function (p) {
    return p.password
})
console.log(soloPass);

const soloNombre = datosUsuarios.map(function (n) {
    return n.nombre
})
console.log(soloNombre);