// Reto 1
function signoZodiaco(dia:number, mes:number, anyo:number):String
{
    let signo: string = ""; 
    switch (mes)
    {  
        case 1:
            if(dia >=21)
            {
                signo = "Acuario";
            }else{
                signo = "Capricornio";
            }
        case 2:
            if(dia>=20)
            {
                signo ="Piscis";
            }else{
                signo ="Acuario";
            }
        case 3:
            if(dia>=21)
            {
                signo = "Aries";
            }else{
                signo ="Piscis";
            }
        case 4:
            if(dia>=21)
            {
                signo = "Tauro";
            }else{
                signo ="Aries";
            }
        case 5:
            if(dia>=21)
            {
                signo="Geminis"
            }else{
                signo="Tauro";
            }
        case 6:
            if(dia>=22)
            {
                signo ="Cancer";
            }else{
                signo =" Geminis";
            }
        case 7:
            if(dia>=22)
            {
                signo= "Leo";
            }else{
                signo = "Cancer";
            }
        case 8:
            if(dia>=24)
            {
                signo="Virgo";
            }else{
                signo = "leo";
            }
        case 9:
            if(dia>=24)
            {
                signo="Libra";
            }else{
                signo = "Virgo";
            }
        case 10:
            if(dia>=24)
            {
                signo = "Escorpio";
            }else{
                signo = "Libra";
            }
        case 11:
            if(dia>=23)
            {
                signo = "Sagitario";
            }else{
                signo="Escorpio";
            }
        case 12:
            if(dia>=22)
            {
                signo="Capricornio";
            }else{
                signo = "Sagitario";
            }
        break;
    }
    return signo;
}

// Reto 9
function ParOImpar(numero: number):void
{
    if((numero & 2) == 0)
    {
        console.log("El numero es par");
    }else{
        console.log("El numero es impar");
    }
}