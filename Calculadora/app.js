let valor1=''
let valor2=''
let resultado=document.getElementById('resultado')
let flag=false
let oper=0

function agreganumero(numero){
    if (flag) {
        console.log('agrego en el 2');
        valor2=valor2+numero
        resultado.textContent=valor2
    }else{
        console.log('agrego en el 1');
        valor1=valor1+numero
        resultado.textContent=valor1
    }
    console.log(valor1);
}
    function limpiatodo() {
        valor1=''
        valor2=''
        resultado.textContent=''
        flag=false      
        oper=0  
    }
    function operar() {
        operacion(oper)
        valor2=''
    }
    function validacion(operador){
        console.log(operador);
        console.log(oper);
        console.log(valor2);
        if(resultado.textContent !='' && valor1!=''&& valor2!='' && oper>0){
            console.log('entro al 1');
            
            resultado.textContent=''
            flag=true
        }else if(valor1!='' && flag==false){
            console.log('entro al 2');
            resultado.textContent=''
            flag=true
        }else if(valor2!='' && flag==true&& oper>0){
            console.log('entro al 3');
            operacion(oper)
        
        }else if(valor2=='' && flag==true&& oper>0){
            valor1=resultado.textContent
            resultado.textContent=''
            flag==true
        }
        oper=operador
    }
    function operacion(params) {
        switch (params) {
            case 1: //suma
                resultado.textContent= Number(valor1)+Number(valor2)
                break;
            case 2: //resta
                resultado.textContent= Number(valor1)-Number(valor2)
                break;
            case 3: //multiplicacion
                resultado.textContent= Number(valor1)*Number(valor2)
                break;
            case 4: //division
                if (Number(valor2)==0){
                    resultado.textContent='Error división en 0'
                }else{
                    resultado.textContent= Number(valor1)/Number(valor2)
                }
                break;
            default:
                break;
        }
    }

