const personas = [
    {nombre: 'Juan', edad: 23, aprendiendo: 'JavaScript'},
    {nombre: 'Pablo', edad: 18, aprendiendo: 'PHP'},
    {nombre: 'Alejandra', edad: 21, aprendiendo: 'AdobeXD'},
    {nombre: 'Caren', edad: 30, aprendiendo: 'Python'},
    {nombre: 'Miguel', edad: 35, aprendiendo: 'ReactJS'}
]

console.log(personas);

// Averiguar quienes son mayores de 28 años
// Con filter puedo acceder a cada objeto de forma individual
const mayores = personas.filter(persona => {
    // console.log(persona);
    return persona.edad > 28;
});

// console.log(mayores);

// Saber qué aprende Alejandra y su edad
const alejandra = personas.find(persona => {
    return persona.nombre === 'Alejandra';
});

console.log(alejandra);
console.log('Alejandra está aprendiendo: ' + alejandra.aprendiendo);

// Método reduce para saber el total de las edades de las personas
let total = personas.reduce((edadTotal, persona) => {
    return edadTotal + persona.edad;
}, 0);

console.log(total);

// Saber el promedio de edad de estas personas sin método
console.log(total / 5);

// Saber el promedio de edad de estas personas método length
console.log(total / personas.lenght); //dinamico