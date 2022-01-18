let myLib3 = require('./dia1');
class Contacts
{
    constructor()
    {
        this.array = [];
    }

    agregarpersona(personas)
    {
        this.array.push(personas);
    }

    printPersons()
    {
        
        for(let i=0; i<this.array.length;i++){
            this.array[i].printAll();
        }
    }
}

module.exports = {Contacts: Contacts};