function mostrar()
{
    var letra;
    var numero;
    var cont = 0;
    var contPar = 0;
    var contImpar = 0;
    var contCero = 0;
    var sumaPositivo = 0;
    var contPositivo = 0;
    var promedio;
    var sumaNegativo = 0;
    var bandera = true;
    var letraMax;
    var letraMin;

    while(cont < 5){

        letra = prompt("Ingrese letra");
        letra = letra.toUpperCase();

        numero = prompt("Ingrese numero!");
        numero = parseInt(numero);

        while(numero < -100 || numero > 100){

            numero = prompt("Ingrese numero correcto entre -100 y 100!");
            numero = parseInt(numero);

        }

        if(numero %2  == 0){ //a
            contPar++;
            console.log(contPar);
                }else if(numero%2 == 1){ //b
                    contImpar++;
                        }else{ 
                            contCero++; //c
                        }  
                        
                        
        if(numero == 0){
            contCero++;
        }

        if(numero > 0) {
            sumaPositivo = sumaPositivo + numero;
            contPositivo++;
        }else if(numero < 0){
                sumaNegativo = sumaNegativo + numero; //e
            }

        
        if(bandera == true || numero > max){
                max = numero;
                letraMax = letra;
            }
    
            if(bandera == true || numero < min){
                min = numero;
                letraMin = letra;   
            }
    
            bandera = false;    

        cont++;

    }

promedio = sumaPositivo/contPositivo; //d

document.write("Cantidad de numeros pares: " + contPar + "<br>");
document.write("Cantidad de numeros impares: " + contImpar + "<br>");
document.write("Cantidad de ceros: " + contCero + "<br>");
document.write("Promedio de numeros positivos: " + promedio + "<br>");
document.write("Suma de todos los negativos: " +  sumaNegativo + "<br>");
document.write("Numero y letra maximo:" + max + " " + letraMax + "<br>");
document.write("Numero y letra minimo:" + min + " " + letraMin + "<br>");








}
