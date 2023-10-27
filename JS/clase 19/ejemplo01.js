function getDiasPorMes(mes) {
    
    if(Number.isNaN(mes)) return false // si o si sea numero
    if(mes < 1 || mes > 12 ) return false // numero entre 1 y 12
    mes-- // porque necesito tener un valor menos?

    const data = [
        {
            nombre: 'Enero',
            dias: 30
        },
        {
            nombre: 'Febrero',
            dias: 30
        },
        {
            nombre: 'Marzo',
            dias: 30
        },
        {
            nombre: 'Abril',
            dias: 30
        },
        {
            nombre: 'Mayo',
            dias: 30
        },
        {
            nombre: 'Junio',
            dias: 30
        },
        {
            nombre: 'Julio',
            dias: 30
        },
        {
            nombre: 'Agosto',
            dias: 30
        },
        {
            nombre: 'Septiembre',
            dias: 30
        },
        {
            nombre: 'Octubre',
            dias: 30
        },
        {
            nombre: 'Noviembre',
            dias: 30
        },
        {
            nombre: 'Diciembre',
            dias: 30
        }
    ]
    return data[mes];

}

const numMes = parseInt(prompt('ingrese el mes del año en numeros: ', '')); // ventana
const resultado = getDiasPorMes(numMes) // ??

if (resultado) {
    alert (`El mes de ${resultado.nombre} tiene ${resultado.dias} dias`)
} else {
    alert ('El mes es invalido')
}