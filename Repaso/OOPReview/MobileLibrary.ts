import { Mobile } from "./Mobile";
export class MobileLibrary 
{
    private name: string;
    private location: string;
    private mobiles : Mobile[];
    private totalPrice: number;

    constructor(name:string,location:string,mobiles: Mobile[])
    {
        this.name = name;
        this.location = location;
        this.mobiles = mobiles;
        this.totalPrice;
    }
    public getname() : string {
        return this.name;
    }
    public setname(v : string) {
        this.name = v;
    }
    public getlocation() : string {
        return this.location;
    }
    public setlocation(v : string) {
        this.location = v;
    }
    
    public getmobiles() : Mobile[] {
        return this.mobiles;
    }
    public setmobiles(v : Mobile[]) {
        this.mobiles = v;
    }
    
    public gettotalPrice() : number {
        return this.totalPrice;
    }
    public settotalPrice(v : number) {
        this.totalPrice = v;
    }
    
    private totalPriceCalculation()
    {
        let sum : number = 0;
        this.mobiles.forEach(function(item)
        {
            sum += item.getprice();
        })
        return this.totalPrice = sum;
        
    }
    
    public printLibrary()
    {
        console.log("This are all my mobiles:")
        for(let i=0; i<this.mobiles.length; i++)
        {
            console.log(this.mobiles[i].toString());
        }
        console.log("Price overall: "+this.totalPrice);
    }
}