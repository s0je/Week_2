"use strict";
exports.__esModule = true;
exports.MobileLibrary = void 0;
var MobileLibrary = /** @class */ (function () {
    function MobileLibrary(name, location, mobiles) {
        this.name = name;
        this.location = location;
        this.mobiles = mobiles;
        this.totalPrice;
    }
    MobileLibrary.prototype.getname = function () {
        return this.name;
    };
    MobileLibrary.prototype.setname = function (v) {
        this.name = v;
    };
    MobileLibrary.prototype.getlocation = function () {
        return this.location;
    };
    MobileLibrary.prototype.setlocation = function (v) {
        this.location = v;
    };
    MobileLibrary.prototype.getmobiles = function () {
        return this.mobiles;
    };
    MobileLibrary.prototype.setmobiles = function (v) {
        this.mobiles = v;
    };
    MobileLibrary.prototype.gettotalPrice = function () {
        return this.totalPrice;
    };
    MobileLibrary.prototype.settotalPrice = function (v) {
        this.totalPrice = v;
    };
    MobileLibrary.prototype.totalPriceCalculation = function () {
        var sum = 0;
        this.mobiles.forEach(function (item) {
            sum += item.getprice();
        });
        console.log(sum);
    };
    return MobileLibrary;
}());
exports.MobileLibrary = MobileLibrary;
