// Reto º
function signoZodiaco(dia, mes, anyo) {
    var signo = "";
    switch (mes) {
        case 1:
            if (dia >= 21) {
                signo = "Acuario";
            }
            else {
                signo = "Capricornio";
            }
        case 2:
            if (dia >= 20) {
                signo = "Piscis";
            }
            else {
                signo = "Acuario";
            }
        case 3:
            if (dia >= 21) {
                signo = "Aries";
            }
            else {
                signo = "Piscis";
            }
        case 4:
            if (dia >= 21) {
                signo = "Tauro";
            }
            else {
                signo = "Aries";
            }
        case 5:
            if (dia >= 21) {
                signo = "Geminis";
            }
            else {
                signo = "Tauro";
            }
        case 6:
            if (dia >= 22) {
                signo = "Cancer";
            }
            else {
                signo = " Geminis";
            }
        case 7:
            if (dia >= 22) {
                signo = "Leo";
            }
            else {
                signo = "Cancer";
            }
        case 8:
            if (dia >= 24) {
                signo = "Virgo";
            }
            else {
                signo = "leo";
            }
        case 9:
            if (dia >= 24) {
                signo = "Libra";
            }
            else {
                signo = "Virgo";
            }
        case 10:
            if (dia >= 24) {
                signo = "Escorpio";
            }
            else {
                signo = "Libra";
            }
        case 11:
            if (dia >= 23) {
                signo = "Sagitario";
            }
            else {
                signo = "Escorpio";
            }
        case 12:
            if (dia >= 22) {
                signo = "Capricornio";
            }
            else {
                signo = "Sagitario";
            }
            break;
    }
    return signo;
}
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
    var temp;
    for (var i = 0; i < n; i++) {
        if (i % 2 != 0) {
            return i;
        }
    }
}
// Reto 4
function ArrayInvertido(param1) {
    var temp = param1.reverse();
    return temp;
}
