// ejercicio 1
let arreglo=[1,4,6,10,22,55,46,2,5,0]
for (let index = 0; index < arreglo.length; index++) {
    arreglo[index]>3?console.log(arreglo[index]):''; 
    
}
// ejercicio 2
let arreglo2=[]
let i=1
while (i<=5) {
    arreglo2.push(i)
    i++
}
console.log(arreglo2);
// ejercicio 3

let arreglo1=[1,4,6,10,22,55,46,2,5,0]
console.log(arreglo1.sort(function(a,b){return(a-b)}));

