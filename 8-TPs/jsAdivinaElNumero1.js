/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/

//las variables fuera de las funciones son globales, una variable adentro de una funcion pisa a la global si tiene el mismo nombre

var numeroSecreto; 
var contadorIntentos;

function comenzar()
{

	//Genero el número RANDOM entre 1 y 100
	 	numeroSecreto = Math.floor(Math.random()*(101-1))+1; //no se le declara var porque ya esta declarada afuera, caso contrario seria local y la funcion verificar no la veria
     console.log(numeroSecreto);
     contadorIntentos = 0;
		//alert(numeroSecreto );
}

function verificar()
{
	
    var numero = document.getElementById("numero").value;

    numero = parseInt(numero);

    contadorIntentos = contadorIntentos + 1;

    document.getElementById("intentos").value = contadorIntentos;

    if(numero == numeroSecreto){
      alert("Gano!");
    }else if(numero > numeroSecreto){
      alert("Se paso!")
    }else{
      alert("Falta!");
    }
	
}