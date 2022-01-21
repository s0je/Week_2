
// Reto 2
let Asia : String [] = ["China", "Japon", "India", "Rusia", "Tailandia"];
let Europa : String [] = ["España", "Francia", "Portugal", "Alemania", "Italia"];
let Oceania : String [] = ["Australia", "Nueva Zelando", "Samoa", "Guam", "Papúa Nueva Guinea"];
let Africa : String [] = ["Nigeria", "Kenia", "Ghana", "Marruecos", "Argelia"];
let America : String[] = ["Estados Unidos", "Canada", "Mexico", "Brasil", "Argentina"];
function Continente(pais:string):string
{
        let continente = [Asia, Europa, Oceania, Africa, America];
        for(let i=0; i<continente.length; i++)
        {
            for(let nombre in continente[i])
            {
                if(continente[i][nombre] == pais)
                {
                    return nombre;
                }
            }
        }   
}
// Reto 3
function Impares(n: number): number
{
    for(let i =0; i<n; i++)
    {
        if ( i % 2 != 0)
        {
            return i;
        }
    }
}
// Reto 4
function ArrayInvertido (param1:[]):void
{
    let nuevoArray = [];
    for(let i=0, j=param1.length -1; i<param1.length; i++, j--)
    {
        nuevoArray[i] = param1[j];
    }
    console.log(nuevoArray);
}
// Reto 5
function Colores(color: String[]):void
{
    let arcoiris = ["Rojo", "Naranja", "Amarillo", "Verde", "Añil", "Azul", "Violeta"];
    for(let colores in arcoiris)
    {
        if(colores == color[colores])
        {
            console.log("El color "+colores+" está en el arcoiris");
        }
    }
}
// Reto 8
function sumaCaracteres(caracter:string[]):number
{
    let temp= 0;
    for(let i=0; i<caracter.length; i++)
    {
        temp += caracter[i].length;
    }
    return temp;
}