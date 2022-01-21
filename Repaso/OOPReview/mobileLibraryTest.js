"use strict";
exports.__esModule = true;
var Mobile_1 = require("./Mobile");
var MobileLibrary_1 = require("./MobileLibrary");
var Nokia = new Mobile_1.Mobile("Nokia", "3210", "Orange", 32, "Gris", false, 0, 50);
var Iphone = new Mobile_1.Mobile("Iphone", "3G", "Movistar", 64, "Azul", false, 1, 100);
var Samsung = new Mobile_1.Mobile("Samsung", "Calaxy 10", "Vodafone", 128, "Negro", true, 2, 120);
var Huawei = new Mobile_1.Mobile("Huawei", "Mate20", "Yoigo", 128, "Blanco", true, 4, 200);
var mobiles = [Nokia, Iphone, Samsung, Huawei];
var mobileLibrary = new MobileLibrary_1.MobileLibrary("The Phone house", "Calle Mayor", mobiles);
// console.log(mobileLibrary.getlocation());
// console.log(mobileLibrary.getmobiles());
// console.log(mobileLibrary.getname());
console.log(mobileLibrary.totalPriceCalculation());
mobileLibrary.printLibrary();
