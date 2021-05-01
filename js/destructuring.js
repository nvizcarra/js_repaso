// Destructuring de objetos
const aprendiendoJS = {
    version: {
        nueva : 'ES6',
        anterior : 'ES5'
    },
    frameworks: ['React', 'VueJS', 'Angular']
}

// console.log(aprendiendoJS);

// Forma anterior

// let version = aprendiendoJS.version.nueva;
// let framework = aprendiendoJS.frameworks[1];

// Forma nueva

let {version, frameworks} = aprendiendoJS;
console.log(version);
console.log(frameworks);

let {version} = aprendiendoJS.version;
console.log(version);

