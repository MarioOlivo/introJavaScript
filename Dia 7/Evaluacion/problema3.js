/**
 * ### Problema 3

Cuente las ocurrencias de distintos elementos en la matriz 2D dada. La entrada 
dada es una matriz, cuyos elementos son matrices de cadenas. 
El resultado es un objeto cuyos nombres de propiedad son los valores 
de las matrices y su valor es el número de sus ocurrencias.

```jsx
const input = [
    ['a', 'b', 'c'],
    ['c', 'd', 'f'],
    ['d', 'f', 'g'],
  ];
```

Resultado esperado:

```jsx
{
    a: 1,
    b: 1,
    c: 2,
    d: 2,
    f: 2,
    g: 1,
  }
```

 */

const input = [
    ['a', 'b', 'c'],
    ['c', 'd', 'f'],
    ['d', 'f', 'g'],
  ];
  
  let data=[]
  let data2=[]
  for (let i = 0; i < input.length; i++) {
    let valor= input[i];
    for( let j=0; j<valor.length;j++){
        let valor2 = valor[j]
        if (data.indexOf(valor2)==-1 ) data.push(valor2)

        data2.push(valor2)
        
    }    
  }
//  console.log(data);
//  console.log(data2);
  //let contador= data2.filter(fil=>fil=='c')
 // console.log(contador);
  
  let resultado=[]
  let barridodata = data.forEach(barrdata=>{
   // console.log(barrdata);
   // barrer obj principal
    let contador= data2.filter(fil=>fil==barrdata)
   // console.log(contador);
     resultado[barrdata]=contador.length
  })
  console.log(resultado);
  