import { Book } from "./book";

let book1 = new Book ("Introducción a Javascript", 233, "2344433-BC23333", "Joseph Smith", "Now Editions");

console.log(book1.toString());
book1.getTitle();
book1.getNPages();
book1.getIsbn();
book1.getAuthor();
book1.getEditorial();
book1.setTitle("Origen");
book1.setNPages(640);
book1.setIsbn("22331-BC2233444");
book1.setAuthor("Dan Brown");
book1.setEditorial("Mondadori");
console.log(book1.toString());
