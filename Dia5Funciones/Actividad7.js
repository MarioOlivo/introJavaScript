//ejercicio 1
function buscapalabra(cadena,termino){
let flag
// para buscar la palabra hacemos
let posicion = cadena.indexOf(termino);
if (posicion !== -1)
flag=true  
else
  flag=false

return flag
}

   //ejercicio 2
let cadena = prompt('ingresa una cadena de text');
let termino = prompt('ingresa la palabra a buscar');
buscapalabra(cadena,termino)


let numeros=[1,2,3,4,10,11]
function sumaarray(numeros){
    let sumados=0
    for (let index = 0; index < numeros.length; index++) {
        sumados+=numeros[index]
        
    }
    return sumados
}
//ejercicio 4
i
// ejercicio 5
var myArray = [1, 5, 6, 2, 3];
function obtenermaximo(myArray){

var m = Math.max(...myArray);
console.log(m)
return m
}

// ejercicio 6

function convertirTemperatura(temperatura,atipo){
   // (0 °C × 9/5) + 32 
 
    let mensaje=atipo==1?` los grados centigrados ${temperatura} a fahrenheit ${(Number(temperatura)*(9/5))+32} `:` los grados fahrenheit ${temperatura} a centigrados ${(Number(temperatura)-32)/1.8}`

   return mensaje
}


/// Ejercicio 7


function Multiply(number) {
  var fibonacci = [];
  fibonacci[0] = 0;
  fibonacci[1] = 1;
  for (var i = 2; i < number; i++) {
      fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1];
  }
  return fibonacci;
}
var f = Multiply(10);
console.log(f);


function multiplicar(valor1,valor2){
  var producto= valor1*(valor2== undefined?valor1:valor2)

  return producto
}

console.log(multiplicar(3));