// Reto 6
function esPar(numero) {
    var temp = 0;
    var n = 0;
    var par;
    while (n < numero.length) {
        temp = numero[n];
        par = (temp % 2) == 0;
        if (par == true) {
            return par;
        }
        n++;
    }
}
// Reto 7
function empiezaM(letra) {
    var temp;
    var n = 0;
    while (n < letra.length) {
        if (letra[n][0] == "M") {
            return temp = true;
        }
        n++;
    }
}
