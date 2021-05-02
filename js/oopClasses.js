// Clase

class Tarea {
    constructor(nombre, prioridad) {
        this.nombre = nombre;
        this.prioridad = prioridad
    }    
    mostrar() {
        return `${this.nombre} tiene prioridad  ${this.prioridad}`;    
    }
}

// Crear objetos
let tarea1 = new Tarea('Practicar JavaScript', 'Alta');
let tarea2 = new Tarea('Pasear', 'Media');

console.log(tarea1.mostrar());
console.log(tarea2.mostrar());
