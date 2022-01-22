import { Person } from "./person";

export class Contacts 
{
    // Declaramos las variables
    public people: Person [];

    constructor()
    {
        this.people = [];
    }
    // Declaramos metodo
    public printCalendar():void
    {
        for(let i=0; i<this.people.length;i++)
        {
            console.log(this.people[i]);
        }
    }
}