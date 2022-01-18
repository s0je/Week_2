let myLib = require('./dia1.js');
let Persona = myLib.Person;

let persona1 = new Persona("Pepe","azul", 188,90,1986,["leer","cocinar","jugar"]);
let persona2 = new Persona("Ana","Negro",178,80,1989,["correr","saltar","nadar"]);

// persona1.IMC();
// persona1.Edad();
// persona1.printAll();
// persona1.printHobbies();

module.exports = {Persona: Persona};