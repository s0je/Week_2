import { Person } from "./person";

let persona1 = new Person ("Pepito", 30, "Calle Mayor");

persona1.printName();
console.log(persona1.yearOfBirth(2022));
persona1.setAddress("Calle Principal");
console.log(persona1.getAddress());

