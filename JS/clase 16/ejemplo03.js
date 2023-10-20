const formulario = document.getElementById('formulario');

formulario.addEventListener('submit', function(e){
    e.preventDefault(); //evita que el form se envie por defecto al recargar la pagina

    if(e.currentTarget.nombre.value == '') {
        alert("Debes ingresar un nombre");
        return;
    }
    if(e.currentTarget.comentarios.value == '') {
        alert("Debes ingresar un comentario");
        return;
    }

    alert(`gracias ${e.currentTarget.nombre.value} por enviarnos el siguiente comentario: ${e.currentTarget.comentarios.value}.`)
})

