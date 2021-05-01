// Agregar métodos o funciones en un objeto

const persona = {
    nombre: 'Nicolás',
    trabajo: 'Desarrollsador Web',
    edad: 30, 
    musicaRock : true,
    mostrarInformacion: function(){
        console.log(`${this.nombre} es ${this.trabajo} y su edad es ${this.edad}`)
    }
}

persona.mostrarInformacion();