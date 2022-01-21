import { Mobile } from "./Mobile";

let Nokia = new Mobile("Nokia","3210","Orange",32,"Gris",false,0,50);
let Iphone = new Mobile("Iphone", "3G","Movistar",64,"Azul",false, 1,100);
let Samsung = new Mobile("Samsung","Calaxy 10", "Vodafone", 128,"Negro", true, 2, 120);
let arrayMobile = new Array (Nokia, Iphone, Samsung);

for(let mobile in arrayMobile)
{
    console.log(arrayMobile[mobile].toString());
}