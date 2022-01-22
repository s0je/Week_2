import { Person } from "./person";
import { Contacts } from "./contacts";

let persona1 = new Person ("Pepito", 30, "Calle Mayor");
let persona2 = new Person ("Carmen", 35, "Calle Principal");
let contact1 = new Contacts();
contact1.people.push(persona1);
contact1.people.push(persona2);
contact1.printCalendar();
