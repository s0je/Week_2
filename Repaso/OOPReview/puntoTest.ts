import { Punto } from "./punto";

let coordenadas = new Punto (-25,10);
let otroPunto = new Punto (13, 40);
let otroPunto1 = new Punto (-14,3);
let otroPunto2 = new Punto (1,-1);
let arrayPuntos = [coordenadas, otroPunto, otroPunto1, otroPunto2];

console.log(coordenadas.toString());
console.log(coordenadas.distanciaAlOrigen());
console.log(coordenadas.calcularDistancia(otroPunto));
console.log(coordenadas.calcularCuadrante());
console.log(coordenadas.calcularMasCercano(arrayPuntos));