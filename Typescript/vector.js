"use strict";
exports.__esModule = true;
exports.Vector = void 0;
var Vector = /** @class */ (function () {
    function Vector(n, k) {
        var valor = [0];
        for (var i = 0; i < n; i++) {
            valor[i] = Math.floor(Math.random() * k);
            this.elements = valor;
        }
    }
    Vector.prototype.Print = function () {
        console.log(this.elements);
    };
    Vector.prototype.Add = function (v1) {
        var sum = new Vector(0, 0);
        sum.elements = [];
        this.elements.forEach(function (value, index) {
            sum.elements[index] = (v1.elements[index] + value);
        });
        return sum;
    };
    Vector.prototype.Subs = function (v1) {
        var subs = new Vector(1, 1);
        subs.elements = [];
        this.elements.forEach(function (value, index) {
            subs.elements[index] = (value - v1.elements[index]);
        });
        return subs;
    };
    Vector.prototype.Mult = function (v1) {
        var mult = new Vector(0, 0);
        mult.elements = [];
        this.elements.forEach(function (value, index) {
            mult.elements[index] = (value * v1.elements[index]);
        });
        return mult;
    };
    Vector.prototype.multNumber = function (n) {
        var temp = new Vector(0, 0);
        temp.elements = [];
        this.elements.forEach(function (value, index) {
            temp.elements[index] = (value * n);
        });
        return temp;
    };
    return Vector;
}());
exports.Vector = Vector;
