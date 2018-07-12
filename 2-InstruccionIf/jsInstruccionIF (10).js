function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	
var random = Math.floor(Math.random()*(11-1))+1; //si quiero que toque el 10, el maximo tiene que ser 11

if(random >= 9)
	msg = "Excelente";
else{
	if(random >= 4){
		msg = "Aprobo";
	}else{
		msg = "Vamos, se puede";
	}
}	
console.log(random);
alert(msg);
}//FIN DE LA FUNCIÓN