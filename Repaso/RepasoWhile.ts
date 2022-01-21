
// Reto 6
function esPar(numero:number[]):Boolean
{
    let temp: number= 0;
    let n= 0;
    let par: boolean;
    while(n<numero.length)
    {
        temp = numero[n];
        par = (temp % 2) ==0;
        if(par == true)
        {
            return par;
        }
        n++;
    }
}
// Reto 7
function empiezaM(letra: string[]):Boolean
{
    let temp: Boolean;
    let n= 0;
    while(n<letra.length)
    {
        if(letra[n][0] == "M")
        {
            return temp= true;
        }
        n++;
    }
}