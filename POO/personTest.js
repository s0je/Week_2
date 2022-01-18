let myLib = require('./dia1.js');
let Persona = myLib.Person;

let persona1 = new Persona("Pepe","azul", 188,90,1986,["leer","cocinar","jugar"]);

persona1.IMC();
persona1.Edad();
persona1.printAll();
persona1.printHobbies();