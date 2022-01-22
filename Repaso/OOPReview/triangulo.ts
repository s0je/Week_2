import { Punto } from "./punto";
export class Triangulo 
{
    private x:Punto;
    private y:Punto;
    private z:Punto;

    constructor(x:Punto,y:Punto,z:Punto)
    {
        this.x = x;
        this.y = y;
        this.z = z;
    }

    public calcularLongitudLados():number[] {
        let longitudLados = [3];
       
        longitudLados[0] = this.x.calcularDistancia(this.y);
        longitudLados[1] = this.y.calcularDistancia(this.z);
        longitudLados[2] = this.z.calcularDistancia(this.x);
    
        return longitudLados;
      }
}