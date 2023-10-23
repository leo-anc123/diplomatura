const alternar = document.getElementsByClassName('alternar')[0];

alternar.addEventListener('click', function(e) {
    e.currentTarget.classList.toggle('activo')
});

//classList --> Representa la lista de clases asignadas a un elemento
//toggle --> Cambio, ejemplo: "Prender" o "apagar".