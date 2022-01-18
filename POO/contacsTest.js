let myLib = require('./contacts');
let myLib3 = require('./dia1');
let myLib2 = require('./personTest');
let Contacto = myLib.Contacts;

let obj = new Contacto ();


obj.agregarpersona(new myLib2.Persona("Pepe","azul", 188,90,1986,["leer","cocinar","jugar"]));
obj.agregarpersona(new myLib2.Persona("Ana","Negro",178,80,1989,["correr","saltar","nadar"]));
obj.printPersons();