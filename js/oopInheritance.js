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

class ComprasPendientes extends Tarea {
    constructor(nombre, prioridad, cantidad) {
        super(nombre, prioridad);
        this.cantidad = cantidad;
    }
    mostrar() {
        return `Puedo reescribir el método mostrar de la clase Tarea`;
    }
}

// Crear objetos
let tarea1 = new Tarea('Practicar JavaScript', 'Alta');
let tarea2 = new Tarea('Pasear', 'Media');

console.log(tarea1.mostrar());
console.log(tarea2.mostrar());


// Compras

let compra1 = new ComprasPendientes('Jabón', 'Urgente', 3);
console.log(compra1.mostrar());