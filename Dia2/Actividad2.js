






function validaVacunacion(){
    var acepto= prompt('Deseas vacunarte?,Si, No')
    if(acepto==='Si'){
        // Recopilación de datos
        
        var mensaje=''
        var nombre = prompt('Ingresa tu nombre')
        var edad = Number(prompt('Ingresa tu edad'))
        var sexo = prompt('M-Masculino,F-Femenino')
        var residente = prompt('Vive en la franja fronteriza del norte del país?,Si, No')
        var sr=''
        if (sexo==='M') sr='sr.'
        else sr='sra.'
        var mensaje1='Buen día '+sr+' '+nombre
        
        var semanas=0
        var embarazada=0
        if(sexo==='F'){
            embarazada = Number(prompt('Se encuentra embarazada?,0-No, 1-Si'))
            if(embarazada===1){
                semanas = Number(prompt('Semanas de gestación tiene?'))
            }
        }
        // Realizar la validación si es candidato a vacuna
        /*
        //Mayor de 18 años que residen en un municipio fronterizo del Norte del pais.
        //Embarazadas mayores de 18 años con mas de 9 semanas de gestacion.
        //Personas que cumplen 30 años o mas en este año.
        */
        if (edad>=18  && residente==='Si' && embarazada===0){
            mensaje='Perteneces al grupo de mayor de 18 años que residen en un municipio fronterizo del Norte del pais.'
        }else if(edad>=18 && embarazada===1 &&  semanas>9){
            mensaje='Perteneces al grupo de embarazadas mayores de 18 años con mas de 9 semanas de gestacion.'
        }else if(edad>=30 && residente==='No' && embarazada===0){
            mensaje='Pertenece al grupo de personas que cumplen 30 años o mas en este año.'
        }else{
            mensaje='Lo sentimos no es apto para aplicarle la vacuna.'
        }
        alert(mensaje1+' '+mensaje)
    }else{
        alert('Gracias, saludos.')
    }
}
