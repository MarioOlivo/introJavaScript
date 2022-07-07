// Actividad 3 
// Ejecicio 1
var nombre= prompt('Escrube tu nombre')
var edad = prompt('Escribe tu edad')

if(edad<18){
    console.log('No puedes ingresar')
}else{
    console.log(nombre=='Mario'||nombre=='Carlos'?'Socio VIP':'Cliente normal');
}
//Ejercicio 2
function piedrapapertijera(){
    var jugador1=Number(prompt('Jugador 1 elige,1-Piedra,2-Papel,3-Tijera'))
    var jugador2=Number(prompt('Jugador 2 elige,1-Piedra,2-Papel,3-Tijera'))
    if(jugador1==jugador2){alert('Empate')}else{
    if((jugador1==1&&jugador2==3)||(jugador1==3&&jugador2==2)||(jugador1==2&&jugador2==1)){
    alert('El ganador es el jugador 1');
    }else{
        alert('El ganador es el jugador 2');
    }
    }
}
//Ejercicio 3
var num = Number(prompt('Ingresa un numero'))
var residuo = num%2
alert(residuo!=0?'No se puede dividir':'El valor '+num+' se puede dividir entre 2')
//ejercicio4

var num2 = Number(prompt('Ingresa un numero'))
var residuo2 = num2%2
alert(residuo!=0?'El valor es primo':'El valor es par')
//ejercicio5
var num2 = Number(prompt('Ingresa un numero'))
num2==1000?'Felicidades eres ganador':'Sigue participando'

//ejercicio 6
var valor1 =Number(prompt('Ingresa un valor'))
var valor2 =Number(prompt('Ingresa un valor'))
if(valor1==valor2){
    alert('Los valores son iguales')
}else{
   alert(valor1<valor2?'Valor 1 es menor a valor 2':'Valor 2 es menor a valor 1')
}

//ejercicio 7
function validavalores(){
var var1=Number(prompt('Ingresa un valor'))
var var2=Number(prompt('Ingresa un valor'))
var var3=Number(prompt('Ingresa un valor'))
var mensaje =''
if(var1==var2&&var1==var3){
    mensaje='Los tres valores son iguales'
}else{
if(var1>var2 && var1>var3){
    mensaje='valor 1 es mayor'
}else if(var2>var3){
    mensaje='Valor 2 es el mayor'
}else{
    mensaje='Valor 3 es el mayor'
}

if (var1==var2){
    mensaje+=', valor 1 y valor 2 son iguales'
}else if(var1==var3){
    mensaje+=', valor 1 y valor 3 son iguales'
}else if(var2==var3 ){
    mensaje+=', valor 2 y valor 3 son iguales'
}
}
alert(mensaje)
}

