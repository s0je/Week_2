import { sumatorio } from "../../../../preoyectosJavascript/proyecto1/libreriaVector";

export class Vector 
{
    private elements : Number[];

    constructor(n:number,k:number)
    {
        let valor:Number[];
        for(let i=0 ; i<n; i++)
        {
            valor.push(Math.floor(Math.random() * k));
            this.elements= valor;
        }
    }

    public Print():void
    {
        console.log(this.elements)
    }

    public Add(v1:Vector):Vector
    {
        let sum : Vector = new Vector(1,1);
        sum.elements = [];
        this.elements.forEach(function(value,index)
        {
            sum.elements[index] =(value + v1[index]);
        });
        return sum;
    }

    // public Subs(v1:Vector):Vector
    // {
    //     let subs : Vector = new Vector (1,1);
    //     subs.elements= [];
    //     v1.elements.forEach(function(value, index)
    //     {
    //         subs.elements[index] = (value - this.elements[index]);
    //     });
        
    //     return subs.elements;
    // }
}