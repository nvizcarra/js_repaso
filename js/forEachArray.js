// Creo un array
const carrito = ['Producto 1', 'Producto 2', 'Producto 3'];

console.log(carrito);

// querySelector: Devuelve el primer elemento del documento (utilizando un recorrido primero en profundidad pre ordenado de los nodos del documento) que coincida con el grupo especificado de selectores.
const appContenedor = document.querySelector('#app');

let html = '';
// este forEach va a iterar en el carrito y cada producto del carrito será trantados como la palabra clave producto del arrow function
carrito.forEach(producto => {
    html += `<li>${producto}</li>`;
})

appContenedor.innerHTML = html;