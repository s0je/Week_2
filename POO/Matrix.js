class Matrix
{
    constructor()
    {
        this.arrayMatrix =[];
    }

    Constructor(n,m,k)
    {
        let temp = [];
        for(let i=0; i<n; i++)
        {
            for(let j=0; j<m; j++)
            {
                temp.push(Math.floor(Math.random() * k));
            }
            this.arrayMatrix.push(temp);
            temp =[];
        }

    }

    add(m)
    {
        if(m.length == this.arrayMatrix.length)
        {
            let suma = [];
            let temp = [];
            for(let i=0; i<this.arrayMatrix.length; i++)
            {
                for(let j=0;j<this.arrayMatrix[i].length; j++)
                {
                    temp.push(m[i][j] + this.arrayMatrix[i][j]);
                }
                suma.push(temp);
                temp = [];
            }
            console.log(suma);
        }
    }
    productNum(n)
    {
        let temp = [];
        let matriz = [];

        for(let i=0; i<this.arrayMatrix.length; i++)
        {
            for(let j=0; j<this.arrayMatrix[i].length; j++)
            {
                temp.push(this.arrayMatrix[i][j] * n);
            }
            matriz.push(temp);
            temp = [];
        }
        console.log(matriz);
    }

    subs(m)
    {
        if(m.length == this.arrayMatrix.length)
        {
            let subs = [];
            let temp = [];
            for(let i=0; i<this.arrayMatrix.length; i++)
            {
                for(let j=0; j<this.arrayMatrix[i].length; j++)
                {
                    temp.push( m[i][j] - this.arrayMatrix[i][j]);
                }
                subs.push(temp);
                temp =[];
            }
            console.log(subs);
        }
    }

    producto(a)
    {
        if(a.length == this.arrayMatrix.length)
        {
            let producto = [];
            let temp =[];
            for(let i=0; i<this.arrayMatrix.length; i++)
            {
                for(let j=0; j<this.arrayMatrix[i].length; j++)
                {
                    temp.push(a[i][j] * this.arrayMatrix[i][j]);
                }
                producto.push(temp);
                temp = [];
            }
            console.log(producto);
        }
    }
}

module.exports = {Matrix: Matrix};