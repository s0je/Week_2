"use strict";
exports.__esModule = true;
var person_1 = require("./person");
var persona1 = new person_1.Person("Pepito", 30, "Calle Mayor");
persona1.printName();
console.log(persona1.yearOfBirth(2022));
persona1.setAddress("Calle Principal");
console.log(persona1.getAddress());
