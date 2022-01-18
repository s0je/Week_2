let myLib = require("./Matrix");
let testMatrix = new myLib.Matrix;

function crearMatriz(){
        let matriz =[]
        let temp =[];
        for(let i=0;i<4;i++){
            for(let j=0;j<4;j++){
                temp.push(Math.floor(Math.random() * 50));
            }
            matriz.push(temp);
            temp =[];
        }
        return matriz;
     }
let arrayPrueba = crearMatriz();

testMatrix.Constructor(4,4,5);
// testMatrix.add(arrayPrueba);
// testMatrix.productNum(2);
testMatrix.subs(arrayPrueba);
testMatrix.producto(arrayPrueba);