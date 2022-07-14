/**
 * ### Problema 4

Escriba una función de JavaScript que tomará una serie de números almacenados

y encontrará el segundo número más bajos y segundos más altos, respectivamente

del siguiente arreglo:  *`const arr = [3,4,6,1,5,2,9,10,23,12]`*

```jsx
const arr = [3,4,6,1,5,2,9,10,23,12]

```
 */
const arr = [3,4,6,1,5,2,9,10,23,12]
//console.log( arr.sort(function(a, b) {return a - b}));
let arrorder =arr.sort(function(a, b) {return a - b})
let ultimoreg = arr.length
console.log(arrorder[1]);
console.log(arrorder[ultimoreg-2]);
