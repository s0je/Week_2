"use strict";
exports.__esModule = true;
exports.Mobile = void 0;
var Mobile = /** @class */ (function () {
    function Mobile(name, model, trademark, sdSize, color, is5G, cameraNumber, price) {
        this.name = name;
        this.model = model;
        this.trademark = trademark;
        this.sdSize = sdSize;
        this.color = color;
        this.is5G = is5G;
        this.cameraNumber = cameraNumber;
        this.price = price;
    }
    Mobile.prototype.getname = function () {
        return this.name;
    };
    Mobile.prototype.setname = function (v) {
        this.name = v;
    };
    Mobile.prototype.getmodel = function () {
        return this.model;
    };
    Mobile.prototype.setmodel = function (v) {
        this.model = v;
    };
    Mobile.prototype.gettrademark = function () {
        return this.trademark;
    };
    Mobile.prototype.settrademark = function (v) {
        this.trademark = v;
    };
    Mobile.prototype.getsdSize = function () {
        return this.sdSize;
    };
    Mobile.prototype.setsdSize = function (v) {
        this.sdSize = v;
    };
    Mobile.prototype.getcolor = function () {
        return this.color;
    };
    Mobile.prototype.setcolor = function (v) {
        this.color = v;
    };
    Mobile.prototype.getis5G = function () {
        return this.is5G;
    };
    Mobile.prototype.setis5G = function (v) {
        this.is5G = v;
    };
    Mobile.prototype.getcameraNumber = function () {
        return this.cameraNumber;
    };
    Mobile.prototype.setcameraNumber = function (v) {
        this.cameraNumber = v;
    };
    Mobile.prototype.getprice = function () {
        return this.price;
    };
    Mobile.prototype.setprice = function (v) {
        this.price = v;
    };
    Mobile.prototype.toString = function () {
        var mensaje = "The characteristics of ".concat(this.name, " are: \nName - ").concat(this.name, "\n Model - ").concat(this.model, "\n Trademark - ").concat(this.trademark, "\n SD Size - ").concat(this.sdSize, "\n Color - ").concat(this.color, "\n Is 5G? - ").concat(this.is5G, "\n Number of Cameras - ").concat(this.cameraNumber, "\n Price - ").concat(this.price, ".");
        return mensaje;
    };
    return Mobile;
}());
exports.Mobile = Mobile;
