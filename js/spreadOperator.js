// Si quiero pasarle una variable con números a la funcion suma, no puedo hacerlo de esta manera
function suma(a,b,c) {
    console.log(a+b+c);
}

const numeros = [1,2,3];

// Resultado en consola: 1,2,3,undefined
// suma(numeros);
suma(...numeros);

// let frameworks = ['ReactJS', 'Laravel', 'Django'];

// Unir los arrays en 1 solo 
// let combinacion = [...lenguajes,...frameworks];
// console.log(combinacion);

// forma anterior
// let combinacion = lenguajes.concat(frameworks);
// console.log(combinacion); 

// Crear una copia del array lenguajes
// let nuevoArreglo = [...lenguajes];
// console.log(nuevoArreglo);

// Sin Spread Operator: Traer el ultimo (Python)
// let [ultimo] = lenguajes.reverse();
// reverse para volver a acomodar 
// lenguajes.reverse();
// El reverse da vuelta lenguajes pero lo deja así, arriba tendría que crear otro lenguajes.reverse (A)
// console.log(lenguajes);
// En consola el último va a ser Python
// console.log(ultimo);

// let lenguajes = ['JavaScript', 'PHP', 'Python'];

// // Traer el ultimo (Python)
// let [ultimo] = [...lenguajes].reverse();
// console.log(lenguajes);
// console.log(ultimo);

// // Si quiero pasarle una variable con números a la funcion suma, no puedo hacerlo de esta manera
// function suma(a,b,c) {
//     console.log(a+b+c);
// }

// const numeros = [1,2,3];

// // Resultado en consola: 1,2,3,undefined
// suma(numeros);