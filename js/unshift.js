let variable = ["Uno", "Dos", "Tres"];

variable.shift();
console.log("Con .shift() variable contiene " + variable)
variable.unshift("1");
console.log("Con .unshift() variable contiene " + variable)

let otraVariable = ["Cuatro", "Cinco", "Seis"];
variable.unshift("4");
console.log("Con .unshift() pero sin usar .shift() otraVariable contiene " + otraVariable)

// .unshift solo funciona si se uso .shift() previamente