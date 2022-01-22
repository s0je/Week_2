import { Book } from "./book"

export class Library
{
    // Declaracion de variables
    private books: Book[];
    private address : String;
    private manager: string;

    constructor(books: Book[], address:string, manager:string)
    {
        this.books = books;
        this.address= address;
        this.manager=manager;
    }

    // Metodo GETTER

    public getAddress():void
    {
        console.log(this.address);
    }

    public getManager():void
    {
        console.log(this.manager);
    }

    // Metodo SETTER

    public setAddress(address:string):void
    {
        this.address = address;
    }

    public setManager(manager:string):void
    {
        this.manager = manager;
    }

    // METODOS

    public toString():string
    {
        for(let i=0; i<this.books.length;i++)
        {
            return this.books[i].toString();
        }
    }

    public getNumberOfBooks(): number
    {
        return this.books.length;
    }
    public findByAuthor(author:string):Book[] //No me sale
    {
        let book : Book[];
        book= this.books.filter(nomb => nomb.getAuthor() == author);
        return book;
    }
}