export class Punto 
{
    private x:number;
    private y:number;

    constructor(x:number,y:number)
    {
        this.x = x;
        this.y = y;
    }

    public toString()
    {
        return "("+this.x+","+this.y+")";
    }
    
    public getX() : number {
        return this.x;
    }
    public setX(v : number) {
        this.x = v;
    }

    public gety() : number {
        return this.y;
    }
    public sety(v : number) {
        this.y = v;
    }
    public distanciaAlOrigen():number
    {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }
    public calcularDistancia(otroPunto: Punto) 
    {
        let x1 = this.x - otroPunto.getX();
        let y1 = this.y - otroPunto.gety();
        return Math.sqrt(x1 * x1 + y1 * y1);
    }
    public calcularCuadrante():number
    {
        if (this.x > 0.0 && this.y > 0.0) 
        {
            return 1;
        } else if ((this.x < 0.0) && (this.y > 0.0)) 
        {
            return 2;
        } 
        else if ((this.x < 0.0) && (this.y < 0.0)) 
        {
            return 3;
        } 
        else if ((this.x > 0.0) && (this.y < 0.0)) 
        {
            return 4;
        }
        else if((this.x==0.0) || (this.y==0.0)) 
        {
            return 0;
        }
    }
    
    public calcularMasCercano(puntos: Punto[]):Punto 
    {
        let masCercano: Punto = null;
    
        if (puntos.length > 0) 
        {
            let distanciaMinima = this.calcularDistancia(puntos[0]);
            masCercano = puntos[0];
    
            for (let i = 1; i < puntos.length; i++) 
            {
                let distancia = this.calcularDistancia(puntos[i]);
                if (distancia < distanciaMinima) {
                distancia = distanciaMinima;
                masCercano = puntos[i];
            }
          }
        }
        return masCercano;
    }

}