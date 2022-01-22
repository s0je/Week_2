"use strict";
exports.__esModule = true;
var person_1 = require("./person");
var contacts_1 = require("./contacts");
var persona1 = new person_1.Person("Pepito", 30, "Calle Mayor");
var persona2 = new person_1.Person("Carmen", 35, "Calle Principal");
var contact1 = new contacts_1.Contacts();
contact1.people.push(persona1);
contact1.people.push(persona2);
contact1.printCalendar();