function todoslosparrafos () {
    const allparrafos = document.getElementsByTagName('p')
    console.log(allparrafos)

    const num = allparrafos.length

    //console.log(num)

    alert (`hay ${num} elementos <p> en este documento`)
}
todoslosparrafos()

function caja1parrafos () {
    const caja1 = document.getElementById('caja1')

    const caja1p = caja1.getElementsByTagName ('p')

    const num = caja1p.length;

    alert (`hay ${num} elementos <p> en est caja1(borde azul)`)
}

caja1parrafos()

function caja2parrafos () {
    const caja2 = document.getElementById('caja2')

    const caja2p = caja2.getElementsByTagName ('p')

    const num = caja2p.length;

    alert (`hay ${num} elementos <p> en est caja2(borde rojo)`)
}

caja2parrafos()