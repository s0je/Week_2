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
        let sum : Vector [];
        this.elements.forEach(function(value,index)
        {
            sum.push(value + v1[index]);
        });
        return sum[0];
    }

    // public Subs(v1:Vector):Vector
    // {
    //     let sum : Vector [];
    //     this.elements.forEach(function(value,index)
    //     {
    //         sum.push(value - v1[index]);
    //     });
    //     return sum[0];
    // }
}