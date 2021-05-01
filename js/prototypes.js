


function Tarea(nombre, urgencia) {
    this.nombre = nombre;
    this.urgencia = urgencia;
}

Tarea.prototype.mostrarInformacionTarea = function() {
    return `La tarea ${this.nombre} tiene prioridad ${this.urgencia}`;
}

const tarea1 = new Tarea('Practicar JavaScript', 'Alta');
const tarea2 = new Tarea('Pasear', 'Media');

console.log(tarea1.mostrarInformacionTarea());
console.log(tarea2.mostrarInformacionTarea());