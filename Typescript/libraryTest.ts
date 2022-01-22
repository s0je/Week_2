import { Library } from "./library";
import { Book } from "./book";
let book1 =[ new Book ("Introducción a Javascript", 233, "2344433-BC23333", "Joseph Smith", "Now Editions")];
let book2 = [new Book ("Origen", 640, "22331-BC2233444", "Dan Brown", "Mondadori")]
let book = [];
book.push(book1);
book.push(book2);
let library = new Library(book, "Calle la Marina", "Pepito");

console.log(library.getNumberOfBooks());
console.log(library);
