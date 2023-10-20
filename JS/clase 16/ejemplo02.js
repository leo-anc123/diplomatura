const link = document.getElementById('link');

link.addEventListener('click', function(e){
    e.preventDefault();  // edita el funcionamiento del boton

    alert('quisite ir a: ' + e.currentTarget.href )
}
)