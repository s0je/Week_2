class Person 
{
    constructor(nombre, colorPelo, altura, peso, yearOfBirth, hobbies)
    {
        this.nombre = nombre;
        this.colorPelo = colorPelo;
        this.altura = altura;
        this.peso = peso;
        this.yearOfBirth = yearOfBirth;
        this.hobbies = hobbies;
    }

    IMC()
    {
        console.log(this.peso / this.altura);
    }
    Edad()
    {
        console.log(2022 - this.yearOfBirth);
    }
    printAll()
    {
        for(let atributo in this)
        {
            console.log(atributo + " - " + this[atributo]);
        }
    }
    printHobbies()
    {

            console.log(this.hobbies);

    }

}

module.exports = {Person: Person};