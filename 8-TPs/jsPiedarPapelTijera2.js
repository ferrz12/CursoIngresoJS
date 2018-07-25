var eleccionMaquina;
var ContadorDeEmpates=0;
var ContadorDeGanadas=0;
var ContadorDePerdidas=0;

function comenzar()
{
	//Genero el número RANDOM entre 1 y 3
	eleccionMaquina = Math.floor(Math.random()*(4-1))+1; 
	console.log(eleccionMaquina);
	
}//FIN DE LA FUNCIÓN
function piedra()
{
	var seleccionJugador = 1;

	if(eleccionMaquina == seleccionJugador){
		alert("Empataron!");
		ContadorDeEmpates++;
		 }else if(eleccionMaquina == 2){
			 alert("Perdiste!");
			 ContadorDePerdidas++;
				 }else if(eleccionMaquina ==3){
					 alert("Ganaste!");
					 ContadorDeGanadas++;
				 }

}//FIN DE LA FUNCIÓN
function papel()
{
	var seleccionJugador = 2;

	if(eleccionMaquina == seleccionJugador){
		alert("Empataron!");
		ContadorDeEmpates++;
		 }else if(eleccionMaquina == 3){
			 alert("Perdiste!");
			 ContadorDePerdidas++;
				 }else if(eleccionMaquina == 1){
					 alert("Ganaste!");
					 ContadorDeGanadas++;
				 }

}//FIN DE LA FUNCIÓN
function tijera()
{
	var seleccionJugador = 3;

	if(eleccionMaquina == seleccionJugador){
		alert("Empataron!");
		ContadorDeEmpates++;
		 }else if(eleccionMaquina == 1){
			 alert("Perdiste!");
			 ContadorDePerdidas++;
				 }else if(eleccionMaquina == 2){
					 alert("Ganaste!");
					 ContadorDeGanadas++;
				 }
	
}//FIN DE LA FUNCIÓN

function mostrarResultado()
{

}