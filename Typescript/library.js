"use strict";
exports.__esModule = true;
exports.Library = void 0;
var Library = /** @class */ (function () {
    function Library(books, address, manager) {
        this.books = books;
        this.address = address;
        this.manager = manager;
    }
    // Metodo GETTER
    Library.prototype.getAddress = function () {
        console.log(this.address);
    };
    Library.prototype.getManager = function () {
        console.log(this.manager);
    };
    // Metodo SETTER
    Library.prototype.setAddress = function (address) {
        this.address = address;
    };
    Library.prototype.setManager = function (manager) {
        this.manager = manager;
    };
    // METODOS
    Library.prototype.toString = function () {
        for (var i = 0; i < this.books.length; i++) {
            return this.books[i].toString();
        }
    };
    Library.prototype.getNumberOfBooks = function () {
        return this.books.length;
    };
    Library.prototype.findByAuthor = function (author) {
        for (var i = 0; i < this.books.length; i++) {
            // for(let j=0; j<this.books.length[i]; j++)
            // {
            // if(this.books[i][j] === author)
            // {
            return this.books.filter(function (valor) {
                valor.getAuthor() == author;
            });
            // }
            // }
        }
    };
    return Library;
}());
exports.Library = Library;
