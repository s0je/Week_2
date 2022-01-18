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
        for(let i in this)
        {
            for(let j in this[i])
            {
                console.log(this[i][j]);
            }
        }

    }
}

module.exports = {Contacts: Contacts};