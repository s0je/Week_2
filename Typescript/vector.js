"use strict";
exports.__esModule = true;
exports.Vector = void 0;
var Vector = /** @class */ (function () {
    function Vector(n, k) {
        var valor;
        for (var i = 0; i < n; i++) {
            valor.push(Math.floor(Math.random() * k));
            this.elements = valor;
        }
    }
    Vector.prototype.Print = function () {
        console.log(this.elements);
    };
    Vector.prototype.Add = function (v1) {
        var sum;
        this.elements.forEach(function (value, index) {
            sum.push(value + v1[index]);
        });
        return sum[0];
    };
    return Vector;
}());
exports.Vector = Vector;
