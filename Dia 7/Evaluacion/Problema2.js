// ### Problema 2

// Del siguiente arreglo de numeros, retorna la suma de todos los que son positivos.

// `const numbers = [ 1, -4, 12, 0, -3, 29, -150];`
const numbers = [ 1, -4, 12, 0, -3, 29, -150];
let positivos =numbers.filter(posit=> posit>=0)
console.log(positivos);
const initialValue=0
const suma = positivos.reduce((v1,v2)=> v1+v2,initialValue);
console.log(suma);
