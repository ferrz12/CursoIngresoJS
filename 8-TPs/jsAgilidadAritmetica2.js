/*Además de lo anterior, ahora 
se agregara un temporizador que
 a los cinco segundos dará por terminado 
 el juego  de no ser ingresado el resultado 
 correcto en ese lapso de tiempo. */
var respuesta;
var temporizador=0;
var nro1
var nro2;
var suma=0;
var resta=0;
var multi=0;
var div=0;
var operacion;

function comenzar()
{
    nro1 = Math.floor(Math.random()*(11-1))+1;
    nro2 = Math.floor(Math.random()*(11-1))+1;
    operacion =  Math.floor(Math.random()*(5-1))+1;
    console.log(nro1);
    console.log(nro2);
    console.log(operacion);

    document.getElementById("PrimerNumero").value = nro1;
    document.getElementById("SegundoNumero").value = nro2;

        

    if(operacion == 1){
        document.getElementById("Operador").value = "Suma";
        suma = nro1 + nro2;
        }else if(operacion == 2){
        document.getElementById("Operador").value = "Resta";
        resta = nro1 - nro2;
            }else if(operacion == 3){
                document.getElementById("Operador").value = "Multiplicacion";
                multi = nro1 * nro2;
                }else if(operacion == 4){
                        document.getElementById("Operador").value = "Division";
                        div = nro1/nro2;
                    }
                
            console.log(suma);
            console.log(resta);
            console.log(multi);
            console.log(div);
    
}//FIN DE LA FUNCIÓN
function Responder()
{
	
    respuesta = document.getElementById("Respuesta").value;
   
            if((respuesta == suma) || (respuesta == resta)){
                alert("Muy bien!");
                    }else if((respuesta == multi) || (respuesta == div)){
                        alert("Muy bien!")
                            }else{
                                alert("Se termino el juego!");
                                }     

    
}//FIN DE LA FUNCIÓN
