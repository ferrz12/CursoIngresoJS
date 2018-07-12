/*En esta oportunidad el juego evaluará tus
 aptitudes a partir de la cantidad de intentos, 
 por lo cual se informará lo siguiente:
1° intento: “usted es un Psíquico”.
2° intento: “excelente percepción”.
3° intento: “Esto es suerte”.
4° intento: “Excelente técnica”.
5° intento: “usted está en la media”.
Desde  6 Intentos hasta 10:”falta técnica”
Más de 10 intentos: “afortunado en el amor!!”.*/

var numeroSecreto; 
var contadorIntentos;

function comenzar()
{
	//Genero el número RANDOM entre 1 y 100
	 
	numeroSecreto = Math.floor(Math.random()*(101-1))+1; //no se le declara var porque ya esta declarada afuera, caso contrario seria local y la funcion verificar no la veria
	console.log(numeroSecreto);
	contadorIntentos = 0;

}

function verificar()
{

	var numero = document.getElementById("numero").value;

    numero = parseInt(numero);

    contadorIntentos = contadorIntentos + 1;

    document.getElementById("intentos").value = contadorIntentos;

	if(contadorIntentos == 1 && (numero == numeroSecreto)){
		alert("Usted es un Psíquico");
		}else if(contadorIntentos == 2 && (numero == numeroSecreto)){
		alert("Excelente percepcion");
			}else if(contadorIntentos == 3 && (numero == numeroSecreto)){
				alert("Esto es suerte");
				}else if(contadorIntentos == 4 && (numero == numeroSecreto)){
					alert("Excelente tecnica");
					}else if(contadorIntentos == 5 && (numero == numeroSecreto)){
						alert("Usted esta en la media")
						}else if((contadorIntentos >= 6 && contadorIntentos <= 10) && numero == numeroSecreto ){
							alert("Falta tecnica");
							}else if(contadorIntentos > 11){
								alert("Afortunado en el amor!");
							}
	
	

}