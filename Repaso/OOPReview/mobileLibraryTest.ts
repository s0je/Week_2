import { Mobile } from "./Mobile";
import { MobileLibrary } from "./MobileLibrary";

let Nokia = new Mobile("Nokia","3210","Orange",32,"Gris",false,0,50);
let Iphone = new Mobile("Iphone", "3G","Movistar",64,"Azul",false, 1,100);
let Samsung = new Mobile("Samsung","Calaxy 10", "Vodafone", 128,"Negro", true, 2, 120);
let Huawei = new Mobile("Huawei", "Mate20", "Yoigo", 128, "Blanco", true, 4, 200);
let mobiles = [Nokia, Iphone, Samsung, Huawei];
let mobileLibrary = new MobileLibrary("The Phone house","Calle Mayor", mobiles);

// console.log(mobileLibrary.getlocation());
// console.log(mobileLibrary.getmobiles());
// console.log(mobileLibrary.getname());
mobileLibrary.totalPriceCalculation();