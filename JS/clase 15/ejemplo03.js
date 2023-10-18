
// selecciona los elementos en este caso li que tenia la clase item
const items = document.getElementsByClassName('item')

// for --> bucle que nos sirve para recorrer
// valor inicial; condicion de tope ; incremento
//let i --> es una variable que va a ir actualizando su valor

for (let i = 0; i < items.length; i++) {
    items[i].style = 'color:blue; padding-left: ' + (10*i) + 'px';
    
}
