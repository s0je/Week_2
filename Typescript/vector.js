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
        var sum = new Vector(1, 1);
        sum.elements = [];
        this.elements.forEach(function (value, index) {
            sum.elements = (value + v1[index]);
        });
        return sum;
    };
    return Vector;
}());
exports.Vector = Vector;
