// Ejercicio 1
const multiplo=2;

var numero=prompt('escribe un valor')

var total=multiplo*numero

console.log('El valor es: ',total)

// Ejercicio 2
var valor1=prompt('Ingresa Valor 1')
var valor2=prompt('Ingresa Valor 2')
var total2=parseInt(valor1)+parseInt(valor2)
console.log('La suma de los valores es',total2)

// ejercicio 3
// el radio lo recibe de parametro.
function calcularCircunferencia(radio){
const pi=3.1416
var area=(pi*(radio**2))
console.log('La circunferencia es ',area)
}
// ejecutar funcion
calcularCircunferencia(5.3)


// Ejercicio 4
function calcularAreaRombo(d1,d2){
    var areaRombo = (d1*d2)/2
    console.log('El área del rombo es ',areaRombo)
}
// ejecutar funcion
// se puede agregar para que se reciban los valores por medio del prompt
calcularAreaRombo(8,6)