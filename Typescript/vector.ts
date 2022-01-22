export class Vector 
{
    private elements : number[];

    constructor(n:number,k:number)
    {
        let valor:number[] = [0];
        for(let i=0 ; i<n; i++)
        {
            valor[i] = Math.floor(Math.random() * k);
            this.elements= valor;
        }
    }

    public Print():void
    {
        console.log(this.elements)
    }

    public Add(v1:Vector):Vector
    {
        let sum : Vector = new Vector(0,0);
        sum.elements = [];
        this.elements.forEach(function(value,index)
        {
            sum.elements[index] = (v1.elements[index] + value); 
        });
        return sum;
    }

    public Subs(v1:Vector):Vector
    {
        let subs : Vector = new Vector (1,1);
        subs.elements= [];
        this.elements.forEach(function(value,index)
        {
            subs.elements[index] = (value - v1.elements[index]);
        });
        return subs;
    }

    public Mult(v1:Vector):Vector
    {
        let mult : Vector = new Vector (0,0);
        mult.elements=[];
        this.elements.forEach(function(value,index)
        {
            mult.elements[index] = (value * v1.elements[index]);
        });
        return mult;
    }

    public multNumber(n:number):Vector
    {
        let temp : Vector = new Vector (0,0);
        temp.elements = [];
        this.elements.forEach(function(value,index)
        {
            temp.elements[index] = (value * n); 
        });
        return temp;
    }

}