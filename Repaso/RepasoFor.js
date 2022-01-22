// Reto 2
var Asia = ["China", "Japon", "India", "Rusia", "Tailandia"];
var Europa = ["España", "Francia", "Portugal", "Alemania", "Italia"];
var Oceania = ["Australia", "Nueva Zelando", "Samoa", "Guam", "Papúa Nueva Guinea"];
var Africa = ["Nigeria", "Kenia", "Ghana", "Marruecos", "Argelia"];
var America = ["Estados Unidos", "Canada", "Mexico", "Brasil", "Argentina"];
function Continente(pais) {
    var continente = [Asia, Europa, Oceania, Africa, America];
    for (var i = 0; i < continente.length; i++) {
        for (var nombre in continente[i]) {
            if (continente[i][nombre] == pais) {
                return nombre;
            }
        }
    }
}
// Reto 3
function Impares(n) {
    for (var i = 0; i < n; i++) {
        if (i % 2 != 0) {
            return i;
        }
    }
}
// Reto 4
function ArrayInvertido(param1) {
    var nuevoArray = [];
    for (var i = 0, j = param1.length - 1; i < param1.length; i++, j--) {
        nuevoArray[i] = param1[j];
    }
    console.log(nuevoArray);
}
// Reto 5
function Colores(color) {
    var arcoiris = ["Rojo", "Naranja", "Amarillo", "Verde", "Añil", "Azul", "Violeta"];
    for (var colores in arcoiris) {
        if (colores == color[colores]) {
            console.log("El color " + colores + " está en el arcoiris");
        }
    }
}
// Reto 8
function sumaCaracteres(caracter) {
    var temp = 0;
    for (var i = 0; i < caracter.length; i++) {
        temp += caracter[i].length;
    }
    return temp;
}
