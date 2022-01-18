let myLib = require("./vector");
let pruebaVector = new myLib.Vector;

let arrayPrueba = [1,12,3,5,3,6,2,11,32,7];

pruebaVector.Constructor(10,5);
pruebaVector.add(arrayPrueba);
pruebaVector.productNum(2);
pruebaVector.subs(arrayPrueba);
pruebaVector.producto(arrayPrueba);
