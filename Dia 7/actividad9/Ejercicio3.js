
var acum=0
var anterior=1

var contador=2
while (acum<720) {
    acum=anterior*contador
    anterior=acum
    console.log(acum);
    contador+=1
}
console.log(acum);