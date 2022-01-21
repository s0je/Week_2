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
    
    public totalPriceCalculation():void
    {
        let sum : number = 0;
        this.mobiles.forEach(function(item)
        {
            sum += item.getprice();
        })
        console.log(sum);
        
    }    
}