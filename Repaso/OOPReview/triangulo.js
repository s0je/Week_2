"use strict";
exports.__esModule = true;
exports.Triangulo = void 0;
var Triangulo = /** @class */ (function () {
    function Triangulo(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }
    Triangulo.prototype.calcularLongitudLados = function () {
        var longitudLados = [3];
        longitudLados[0] = this.x.calcularDistancia(this.y);
        longitudLados[1] = this.y.calcularDistancia(this.z);
        longitudLados[2] = this.z.calcularDistancia(this.x);
        return longitudLados;
    };
    return Triangulo;
}());
exports.Triangulo = Triangulo;
