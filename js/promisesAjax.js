
const descargarUsuarios = cantidad => new Promise((resolve, reject) => {
// Pasar la cantidad a la api de random user
    const api = `https://randomuser.me/api/?results=${cantidad}&nat=us`;

    // Llamado a AJAX
    const xhr = new XMLHttpRequest();

    // abrir la conexión get api (url) true (asinc)
    xhr.open('GET', api, true);

    // on load
    xhr.onload = () => {
        if(xhr.status === 200) {
            // El llamado es correcto
            resolve(JSON.parse(xhr.responseText).results );
        } else {
            // Error
            reject(Error(xhr.statusText));
        }
    }

    // opcional on error
    xhr.onerror = (error) => reject(error);

    // send: se encarga de enviar el request a la base de datos
    xhr.send()
});

descargarUsuarios(610)
    .then(
        miembros => imprimirHTML(miembros),
        error => console.error(
            new Error('Hubo un error' + error)
        )
    )

function imprimirHTML(usuarios) {
    let html = '';
    usuarios.forEach(usuario => {
        html += `
            <li>
                Nombre: ${usuario.name.first} ${usuario.name.last}
                País: ${usuario.nat}
                Imagen:
                    <img src="${usuario.picture.medium}">
            </li>
        `
    });

    const contenedorApp = document.querySelector('#app');
    contenedorApp.innerHTML = html;
}