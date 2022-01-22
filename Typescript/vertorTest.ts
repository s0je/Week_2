import { Vector } from "./vector";

let vector1 = new Vector (4,10);
let vector2 = new Vector (4,20);

vector1.Print();
vector2.Print();
console.log(vector1.Add(vector2));
console.log(vector1.Subs(vector2));
console.log(vector1.Mult(vector2));
console.log(vector1.multNumber(2));