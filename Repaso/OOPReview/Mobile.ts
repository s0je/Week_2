export class Mobile
{   
    private name: string;
    private model: string;
    private trademark: string;
    private sdSize: number;
    private color: string;
    private is5G: boolean;
    private cameraNumber: number;
    private price: number;    

    constructor(name:string, model:string,trademark:string,sdSize:number,color:string,is5G:boolean,cameraNumber:number,price:number)
    {
        this.name = name;
        this.model = model;
        this.trademark = trademark;
        this.sdSize = sdSize;
        this.color = color;
        this.is5G = is5G;
        this.cameraNumber = cameraNumber;
        this.price = price;
    }
    public getname() : string {
        return this.name;
    }
    public setname(v : string) {
        this.name = v;
    }
    public getmodel() : string {
        return this.model;
    }
    public setmodel(v : string) {
        this.model = v;
    }    
    public gettrademark() : string {
        return this.trademark;
    }
    public settrademark(v : string) {
        this.trademark = v;
    }
    public getsdSize() : number {
        return this.sdSize;
    }
    public setsdSize(v : number) {
        this.sdSize = v;
    }   
    public getcolor() : string {
        return this.color;
    }
    public setcolor(v : string) {
        this.color = v;
    }
    public getis5G() : boolean {
        return this.is5G;
    }
    public setis5G(v : boolean) {
        this.is5G = v;
    }
    public getcameraNumber() : number {
        return this.cameraNumber;
    }
    public setcameraNumber(v : number) {
        this.cameraNumber = v;
    }
    public getprice() : number {
        return this.price;
    }
    public setprice(v : number) {
        this.price = v;
    }
    
    
}