class Vector{
    
    constructor()
    {
        this.arrayNumero = [];
    }

    Constructor(n,m)
    {
        for(let i=0; i<n;i++)
        {
            this.arrayNumero.push(Math.floor(Math.random() * m));
        }
    }

    add(a)
    {
        if(a.length == this.arrayNumero.length)
        {
            let suma = [];
            for(let i=0; i<this.arrayNumero.length; i++)
            {
                suma[i] = a[i] + this.arrayNumero[i];
            }
            console.log(suma);
        }
    }

    productNum(n)
    {
        let temp = [];
        for(let i=0; i<this.arrayNumero.length; i++)
        {
            temp[i] = this.arrayNumero[i] * n;
        }
        console.log(temp);
    }

    subs(a)
    {
        if(a.length == this.arrayNumero.length)
        {
            let subs = [];
            for(let i=0; i<this.arrayNumero.length; i++)
            {
                subs[i] = a[i] - this.arrayNumero[i];
            }
            console.log(subs);
        }
    }

    producto(a)
    {
        if(a.length == this.arrayNumero.length)
        {
            let producto = [];
            for(let i=0; i<this.arrayNumero.length; i++)
            {
                producto[i] = a[i] * this.arrayNumero[i];
            }
            console.log(producto);
        }
    }
}

module.exports = {Vector: Vector};