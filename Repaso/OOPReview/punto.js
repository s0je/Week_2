"use strict";
exports.__esModule = true;
exports.Punto = void 0;
var Punto = /** @class */ (function () {
    function Punto(x, y) {
        this.x = x;
        this.y = y;
    }
    Punto.prototype.toString = function () {
        return "(" + this.x + "," + this.y + ")";
    };
    Punto.prototype.getX = function () {
        return this.x;
    };
    Punto.prototype.setX = function (v) {
        this.x = v;
    };
    Punto.prototype.gety = function () {
        return this.y;
    };
    Punto.prototype.sety = function (v) {
        this.y = v;
    };
    Punto.prototype.distanciaAlOrigen = function () {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    };
    Punto.prototype.calcularDistancia = function (otroPunto) {
        var x1 = this.x - otroPunto.getX();
        var y1 = this.y - otroPunto.gety();
        return Math.sqrt(x1 * x1 + y1 * y1);
    };
    Punto.prototype.calcularCuadrante = function () {
        if (this.x > 0.0 && this.y > 0.0) {
            return 1;
        }
        else if ((this.x < 0.0) && (this.y > 0.0)) {
            return 2;
        }
        else if ((this.x < 0.0) && (this.y < 0.0)) {
            return 3;
        }
        else if ((this.x > 0.0) && (this.y < 0.0)) {
            return 4;
        }
        else if ((this.x == 0.0) || (this.y == 0.0)) {
            return 0;
        }
    };
    Punto.prototype.calcularMasCercano = function (puntos) {
        var masCercano = null;
        if (puntos.length > 0) {
            var distanciaMinima = this.calcularDistancia(puntos[0]);
            masCercano = puntos[0];
            for (var i = 1; i < puntos.length; i++) {
                var distancia = this.calcularDistancia(puntos[i]);
                if (distancia < distanciaMinima) {
                    distancia = distanciaMinima;
                    masCercano = puntos[i];
                }
            }
        }
        return masCercano;
    };
    return Punto;
}());
exports.Punto = Punto;
