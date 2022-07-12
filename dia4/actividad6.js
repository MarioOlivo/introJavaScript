let arreglo1=['eagle','parrot','monkey','boar','lion']
let arreglo2=['panter','dragon','turtle']

//unir 2 arrays
let fusionarray=arreglo1.concat(arreglo2)
console.log(fusionarray);

// agregar
fusionarray.push('cow')
// exluye
fusionarray.slice(1)
// obtener el index de un elemento
console.log(fusionarray.indexOf('parrot'));

//ordenar de menor a mayor
let arre =[4,6,1,0,8,2,45,11,5,33,50,101]

console.log(arre.sort(function(a,b){return(a-b)}));